import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput, Alert, ScrollView } from 'react-native';
import MyStack from './MyStack';

export default function App() {
  return(
    <MyStack/>
  );
}

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


// export default function Login ({navigation}) {
//     return (
//             <View style={styles.container}>
//                 <Text style={{fontSize: 50, fontWeight: 'bold', color: '#1496BB'}}>Study Coin</Text>
//                 <View style = {styles.button}>
//                     <View style = {{
//                     flex: .75,
//                     flexDirection: 'column',
//                     width: '60%',
//                     flexWrap: 'wrap',
//                     justifyContent: 'space-between',
//                     }}>
//                 <View style={styles.loginBox}>
//                     <Text style={styles.Text}>Login</Text>
//                     <TextInput placeholderTextColor={'grey'} placeholder="username" style={styles.input}/>
//                     <TextInput placeholderTextColor={'grey'} placeholder="password" secureTextEntry={true} style={styles.input}/>
//                     <Button color="purple" title="Login" onPress={() => navigation.navigate('Dashboard')}>Login</Button>
//                     <Button color="purple" title="Get started"></Button>
//                 </View>
//                     {/* <StatusBar style="auto" /> */}
//                     </View>
//                 </View>
//             </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#FFE5B4',
//       alignItems: 'center',
//       justifyContent: 'center',
//       // height: '70%',
//       // borderRadius: 30,
//     },
//     button: {
//       flex: .9,
//       backgroundColor: '#1496BB',
//       alignItems: 'center',
//       justifyContent: 'center',
//       width: '70%',
//       borderRadius: 20,
//     },
//     Text: {
//       color: 'white',
//       fontSize: 30,
//       fontWeight: 'bold',
//       textAlign: 'center',
//       padding: '10%',
//       paddingTop: 0,
//     },
//   input: {
//     backgroundColor: 'white',
//     borderRadius: 5,
//     borderColor: 'purple',
//     borderWidth: 1,
//     width: '100%',
//     height: 40,
//     padding: 10,
//   },
//   loginBox: {
//     textAlign: 'center',
//     borderRadius: 10,
//     borderColor: 'purple',
//     borderWidth: 3,
//     width: '100%',
//     height: 450,
//     justifyContent: 'space-evenly',
//     padding: 30,
//   }
//   });