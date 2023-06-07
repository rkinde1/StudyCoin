import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function Login ({navigation}) {
    return (
        <View>
            <View style={styles.container}>
                <Text style={{fontSize: 50, fontWeight: 'bold', color: '#1496BB'}}>Study Coin</Text>
                <View style = {styles.button}>
                    <View style = {{
                    flex: .75,
                    flexDirection: 'column',
                    width: '60%',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    }}>
                    <Text style={styles.Text}>Login</Text>
                <View style={styles.loginBox}>
                    <TextInput placeholderTextColor={'grey'} placeholder="username" style={styles.input}/>
                    <TextInput placeholderTextColor={'grey'} placeholder="password" secureTextEntry={true} style={styles.input}/>
                    <Button color="purple" title="Login" onPress={() => navigation.navigate('Dashboard')}>Login</Button>
                </View>
                    <Button color="purple" title="Get started"></Button>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFE5B4',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
    },
    button: {
      flex: .9,
      backgroundColor: '#1496BB',
      alignItems: 'center',
      justifyContent: 'center',
      width: '70%',
      borderRadius: 20,
    },
    Text: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    input: {
      backgroundColor: 'white',
      borderRadius: 5,
      borderColor: 'purple',
      borderWidth: 1,
      width: '100%',
      height: 40,
      padding: 10,
    },
    loginBox: {
      textAlign: 'center',
      borderRadius: 10,
      borderColor: 'purple',
      width: '100%',
      height: 350,
      justifyContent: 'center',
    }
  });