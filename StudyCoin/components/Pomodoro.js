import {useEffect, useState} from 'react';
import { View, Header, StyleSheet, Button, Text, Alert} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

export default function Timer () {
  var [startVar, setStartVar] = useState(false);
    const start = () =>{
      return (
      <View style={{display: 'flex', justifyContent: 'center', paddingHorizontal: 100,}}>
        <CountdownCircleTimer
            isPlaying
            duration={1500}
            colors={['#1496BB', '#A30000', '#A30000']}
            colorsTime={[7, 2, 0]}>
          {({ remainingTime }) => {  const minutes = Math.floor(remainingTime / 60)
            const seconds = remainingTime % 60

            return <Text>{minutes}:{seconds}</Text>}
          }
        </CountdownCircleTimer>
      </View>
      );
    };

    return (
      <View style={{display: 'flex', flexDirection: 'column'}}>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text style={styles.buttonText}>Pomodoro timer</Text>
        </View>
          {startVar == true && start()}
          <View style = {styles.container}>
              <Button title="Start" style= {styles.button} onPress={() => {setStartVar(true)}}/>
              <Button title="Stop" style= {styles.button} onPress={() => {setStartVar(false)}} />
          </View>
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
        borderRadius: 5,
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
});