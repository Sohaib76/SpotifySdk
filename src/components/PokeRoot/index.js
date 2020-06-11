import React from 'react';
import PokeList from '../Pokelist';
import Pokemon from '../Pokemon';
import PokeHome from '../PokeHome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, Image } from 'react-native';

const Stack = createStackNavigator();


function AppStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Home" 
          component={PokeHome}
          />
          <Stack.Screen name="PokeList" component={PokeList} />
          <Stack.Screen name="Pokemon" component={Pokemon} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
export default AppStack;  



