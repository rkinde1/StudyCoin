import {useEffect, useState} from 'react';
import { View, Header, StyleSheet, Button, Text, Alert} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

export default function Timer () {
  var [startVar, setStartVar] = useState(false);
  var [startBreak, setStartBreak] = useState(false);
  var [breakTime, setBreakTime] = useState(0);
  //You can add gradient here
    const start = () =>{
      return (
      <View style={{display: 'flex', justifyContent: 'center', paddingHorizontal: 100,}}>
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
              Alert.alert("Time's up!");
              setBreakTime(300);
            }
            return (
              <View>
                <Text style={styles.remainingTime}>Remaining</Text>
                <Text style={styles.timerTextDesign}>{minutes}:{seconds}</Text>
                <Text style={styles.remainingTime}>Minutes</Text>
              </View>
              )}
          }
        </CountdownCircleTimer>
      </View>
      );
    };

    const breakTimer = () => {
      return (
        <View style={{display: 'flex', justifyContent: 'center', paddingHorizontal: 100,}}>
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
              <View>
                <Text style={styles.remainingTime}>Remaining</Text>
                <Text style={styles.timerTextDesign}>{minutes}:{seconds}</Text>
                <Text style={styles.remainingTime}>Minutes</Text>
              </View>
              )}
          }
        </CountdownCircleTimer>
      </View>

      );
    }

    const breakTimeButtons = () => {
      return (
        <View style = {styles.container}>
          <Button title="Start Break" style= {styles.button} onPress={() => {setStartBreak(true)}}/>
          <Button title="Stop Break" style= {styles.button} onPress={() => {setStartBreak(false)}} />
        </View>
      );
    }

    const regularTimeButtons = () => {
      return (
        <View style = {styles.container}>
          <Button title="Start" style= {styles.button} onPress={() => {setStartVar(true)}}/>
          <Button title="Stop" style= {styles.button} onPress={() => {setStartVar(false)}} />
        </View>
      );
    }


    return (
      <View style={{display: 'flex', flexDirection: 'column',backgroundColor: '#FFE5B4', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'
      }}>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text style={styles.buttonText}>Pomodoro timer</Text>
          {/* <Text style={styles.textDescription}>Start Earning Ethereum!</Text> */}
          {startVar == true && start()}
          {startBreak == true && breakTimer()}
          {breakTime == 300 && breakTimeButtons()}
          {breakTime == 0 && regularTimeButtons()}
        </View>
          {/* <View styles={styles.historyContainer}>
            <Text>History</Text>
          </View> */}
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 100,
        paddingHorizontal: 50,
        width: '100%',
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 40,
        backgroundColor: '#1496BB',
    },
    buttonText: {
        color: 'Black',
        fontWeight: 'bold',
        marginVertical: 100,
        fontSize: 35,
        display: 'flex',
        paddingHorizontal: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    timerTextDesign: {
      color: 'Black',
      fontWeight: 'bold',
      font: 'Roboto',
      fontSize: 30,
      display: 'flex',
      paddingHorizontal: 60,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textDescription : {
      color: 'Black',
      font: 'Roboto',
      fontSize: 18,
      display: 'flex',
      paddingHorizontal: 60,
      justifyContent: 'center',
      alignItems: 'center'
    },
    //Could probably fix the formatting heres
    historyContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 100,
      paddingHorizontal: 50,
      backgroundColor: 'white',
      borderRadius: 30,
      border: 'solid',
      borderWidth: 1,
      width: 100,
      height: 100,
    },
    remainingTime: {
      color: 'gray', 
      fontSize: 25,
      display: 'flex',
      paddingHorizontal: 60,
      justifyContent: 'center',
      alignItems: 'center'
    }
});