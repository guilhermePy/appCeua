import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Tab } from 'native-base';


function test() {
    return (
      <Tab.Navigator>
        <Stack.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </Tab.Navigator>
    );
  }
  
  export default test;