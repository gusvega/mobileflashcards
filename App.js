import React from 'react';
import { Text, View } from 'react-native';

import { purple, white } from './utils/colors'
import MainView from './components/MainView/MainView'
import CreateDeckView from './components/CreateDeckView/CreateDeckView'

import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

function MainStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: (Constants.statusBarHeight + 50) }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={createStore(reducer)}>
        <MainStatusBar backgroundColor={purple} barStyle="light-content" />
        <Tab.Navigator>
          <Tab.Screen name="Home" component={MainView} />
          <Tab.Screen name="Add Deck" component={CreateDeckView} />
        </Tab.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
