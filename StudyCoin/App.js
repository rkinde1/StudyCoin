import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {NativeRouter, Route, Link } from 'react-router-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{
        backgroundColor: 'purple',
        width: '100%',
        height: 50,
      }}>
      <Link ><Text>Home</Text></Link>
          <Text>Navbar</Text>
      </View>
      <View style = {{
        flex: 4,
      }}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Testing</Text>
        <Button color="purple" title="Get started"></Button>
        <StatusBar style="auto" />
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
  },
});