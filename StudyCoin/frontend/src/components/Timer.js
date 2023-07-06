import {useEffect, useState} from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function Timer () {
  var [startVar, setStartVar] = useState(false);
  var [startBreak, setStartBreak] = useState(false);
  var [breakTime, setBreakTime] = useState(0);
  //You can add gradient here
    const start = () =>{
      return (
        <div>
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
                <p >Remaining</p>
                <p >{minutes}:{seconds}</p>
                <p >Minutes</p>
              </div>
              )}
          }
        </CountdownCircleTimer>
      </div>
      );
    };

    const breakTimer = () => {
      return (
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
      );
    }

    const breakTimeButtons = () => {
      return (
        <div>
          <button title="Start Break" onClick={() => {setStartBreak(true)}}>Start</button>
          <button title="Stop Break" onClick={() => {setStartBreak(false)}}>Stop</button>
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


    return (
      <div>
        <div >
          <p >Pomodoro timer</p>
          {/* <Text style={styles.textDescription}>Start Earning Ethereum!</Text> */}
          {startVar === true && start()}
          {startBreak === true && breakTimer()}
          {breakTime === 300 && breakTimeButtons()}
          {breakTime === 0 && regularTimeButtons()}
        </div>
      </div>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         marginVertical: 100,
//         paddingHorizontal: 50,
//         width: '100%',
//     },
//     button: {
//         paddingHorizontal: 10,
//         paddingVertical: 10,
//         borderRadius: 40,
//         backgroundColor: '#1496BB',
//     },
//     buttonText: {
//         color: 'Black',
//         fontWeight: 'bold',
//         marginVertical: 100,
//         fontSize: 35,
//         display: 'flex',
//         paddingHorizontal: 60,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     timerTextDesign: {
//       color: 'Black',
//       fontWeight: 'bold',
//       font: 'Roboto',
//       fontSize: 30,
//       display: 'flex',
//       paddingHorizontal: 60,
//       justifyContent: 'center',
//       alignItems: 'center'
//     },
//     textDescription : {
//       color: 'Black',
//       font: 'Roboto',
//       fontSize: 18,
//       display: 'flex',
//       paddingHorizontal: 60,
//       justifyContent: 'center',
//       alignItems: 'center'
//     },
//     //Could probably fix the formatting heres
//     historyContainer: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginVertical: 100,
//       paddingHorizontal: 50,
//       backgroundColor: 'white',
//       borderRadius: 30,
//       border: 'solid',
//       borderWidth: 1,
//       width: 100,
//       height: 100,
//     },
//     remainingTime: {
//       color: 'gray', 
//       fontSize: 25,
//       display: 'flex',
//       paddingHorizontal: 60,
//       justifyContent: 'center',
//       alignItems: 'center'
//     }
// });