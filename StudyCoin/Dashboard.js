import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Dashboard ({navigation})  {
    return (
        <View>
            <Text>Dashboard</Text>
            <Text>Current Earnings: </Text>
            <Button title="Pomodoro" onPress={() => navigation.navigate('Timer')}>Pomodoro</Button>
        </View> 
    );
}