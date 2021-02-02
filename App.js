import React from 'react';
import { Text, View } from 'react-native';
import { Button, Icon,  } from 'native-base';

import { purple, white } from './utils/colors'
import MainView from './components/MainView/MainView'
import CreateDeckView from './components/CreateDeckView/CreateDeckView'

import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { createStore } from 'redux'
import { Provider } from 'react-redux'
import friendsReducer from './reducers'
import DeckView from './components/DeckView/DeckView';
import AddCardView from './components/AddCardView/AddCardView';
import QuizView from './components/QuizView/QuizView'
import ScoreView from './components/ScoreView/ScoreView'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainView} />
      <Stack.Screen name="Deck" component={DeckView} />
      <Stack.Screen name="Create New Deck" component={CreateDeckView} />
      <Stack.Screen name="Add New Card" component={AddCardView} />
      <Stack.Screen name="Quiz" component={QuizView} />
      <Stack.Screen name="Score" component={ScoreView} />
    </Stack.Navigator>
  );
}

function MainStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: (Constants.statusBarHeight + 20) }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Provider store={createStore(friendsReducer)}>
        <MainStatusBar backgroundColor={purple} barStyle="light-content" />
        <MyStack />
       
      </Provider>
    </NavigationContainer>
  );
}
