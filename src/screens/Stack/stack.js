import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Home/homeScreen';
import LoginScreen from '../Login/loginScreen';
import PlaylistsSongs from '../PlaylistSongs/playlistsSongs';
import TrackyPlayer from '../Player/trackPlayertwo';



const Stack = createStackNavigator();



function AppStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          /> */}
          
          <Stack.Screen name="Home" component={HomeScreen} 
          options={{
            headerTintColor:"#fff",
            title: 'Recommended Playlists',
            headerStyle: {
              backgroundColor: '#000',
            },
          }}/>
          <Stack.Screen name="PlaylistsSongs" component={PlaylistsSongs}
             options={{
              headerTintColor:"#fff",
              title: 'Playlists Tracks',
              headerStyle: {
                backgroundColor: '#000',
              }
             }} />
          <Stack.Screen name="TrackyPlayer" component={TrackyPlayer} 
            options={{
              headerTintColor:"#fff",
              title: '',
              headerStyle: {
                backgroundColor: '#000',
              },
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
export default AppStack;  



