import React, { Component } from 'react';
import {
  View, Button
} from 'react-native';

import authHandler from "../../utils/authenticationHandler";

class LoginScreen extends Component {
    state = {  }
    render() {
        const {navigation} = this.props
        return (
            <View>
                <Button onPress={() => authHandler.onLogin()} title="Press to login"/>
                {/* <Button onPress={() =>navigation.navigate("Home")} title="Click"></Button> */}
            </View>
        );
    }
}

export default LoginScreen;