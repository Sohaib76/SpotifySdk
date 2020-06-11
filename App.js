
import React, {Component} from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
//import LoginScreen from "./src/screens/Login/loginScreen";
import AppStack from './src/screens/Stack/stack';
// import AppStack from './src/components/PokeRoot';


class App extends Component {
  render() {
    return  (
        <AppStack/>
    ) 
    
  }
}
export default App;


