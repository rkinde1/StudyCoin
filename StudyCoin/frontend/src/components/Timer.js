import {useEffect, useState} from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './Timer.css';

export default function Timer () {
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

    const breakTimeButtons = () => {
      return (
        <div>
          <button title="Start Break" onClick={() => {setStartBreak(true)}}>Start Break</button>
          <button title="Stop Break" onClick={() => {setStartBreak(false)}}>Stop Break</button>
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
    };

    return (
      <div className="background" >
        <div>
          <h2>Pomodoro timer</h2>
          {/* <Text style={styles.textDescription}>Start Earning Ethereum!</Text> */}
          {startVar === true && start()}
          {startBreak === true && breakTimer()}
          {breakTime === 300 && breakTimeButtons()}
          {breakTime === 0 && regularTimeButtons()}
          <button title="Restart" onClick={() => {restart()}}>Restart</button>
        </div>
      </div>
    );
}