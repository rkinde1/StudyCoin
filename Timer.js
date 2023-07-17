import {useEffect, useState} from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './Timer.css';
import abi from './StudyCoinToken.json';
const ethers = require('ethers');

export default function Timer () {

  var [finished, setFinished] = useState(false);
  const contract = abi.abi;
  const tokenAddress = "0x5F1712a315b1123f0781DB8292e40a36bB035F4E";
  
  const addEthereum = async () => {
    const { ethereum } = window;
    if (window.ethereum) {
      try {
        await ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const StudyCoinContract = new ethers.Contract(tokenAddress, contract, signer);
        const amount = ethers.parseEther('15');
        await StudyCoinContract.add(localStorage.getItem('walletAddress'), amount);
        alert('You have claimed 15 STC!');
        setFinished(false);
        restart();
      }
      catch (err) {
        alert(err);
      }
    }
  }

  var [startVar, setStartVar] = useState(false);
  var [startBreak, setStartBreak] = useState(false);
  var [breakTime, setBreakTime] = useState(0);
  //You can add gradient here
    const start = () =>{
      return (
        <div className="center">
        <CountdownCircleTimer
            isPlaying
            duration={1500}
            size={250}
            colors={['#1496BB', '#85bdde', '#5bbaae','#6fcb9f', '#A30000', '#A30000']}
            colorsTime={[1500, 1400, 1000, 750, 2, 0]}>
          {({ remainingTime }) => {  
            const minutes = Math.floor(remainingTime / 60)
            const seconds = remainingTime % 60
            if (remainingTime === 0) {
              setBreakTime(300);
              //this is where earnings are added
            }
            return (
              <div>
                <p>Remaining</p>
                <p>{minutes}:{seconds}</p>
                <p>Minutes</p>
              </div>
              )}
          }
        </CountdownCircleTimer>
      </div>
      );
    };

    const breakTimer = () => {
      return (
        <div className="center">
        <CountdownCircleTimer
            isPlaying
            duration={300}
            size={250}
            colors={['#1496BB', '#85bdde', '#5bbaae','#6fcb9f', '#A30000', '#A30000']}
            colorsTime={[300, 240, 180, 80, 2, 0]}>
          {({ remainingTime }) => {  
            const minutes = Math.floor(remainingTime / 60)
            const seconds = remainingTime % 60
            if (remainingTime === 0) {
              setFinished(true);
              setBreakTime(0);
            }
            return (
              <div>
                <p >Remaining</p>
                <p >{minutes}:{seconds}</p>
                <p >Minutes</p>
              </div>
              )}
          }
        </CountdownCircleTimer>
      </div>
      );
    }

    const sessionCompleted = () => {
      return (
        <div>
          <button title="Claim STC" onClick={() => {addEthereum();}}>Claim STC</button>
        </div>
      )
    }

    const breakTimeButtons = () => {
      return (
        <div>
          <button title="Start Break" onClick={() => {setStartBreak(true)}}>Start Break</button>
        </div>
      );
    }

    const regularTimeButtons = () => {
      return (
        <div>
          <button title="Start" onClick={() => {setStartVar(true)}}>Start</button>
          <button title="Stop" onClick={() => {setStartVar(false)}}>Stop</button>
        </div>
      );
    }

    function restart () {
      setStartVar(false);
      setStartBreak(false);
      setBreakTime(0);
      setFinished(false);
    };

    return (
      <div className="background" >
        <div>
          <h1>Current Balance: {localStorage.getItem('walletBalance')} ETH</h1>
          <h2>Pomodoro Timer</h2>
          {/* <Text style={styles.textDescription}>Start Earning Ethereum!</Text> */}
          {startVar === true && start()}
          {/*Calls the break timer*/}
          {startBreak === true && breakTimer()}
          {breakTime === 300 && breakTimeButtons()}
          {finished === false && breakTime=== 0 && regularTimeButtons()}
          {finished === true && sessionCompleted()}
        </div>
      </div>
    );
}