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
      <Stack.Screen name="MainView" component={MainView} />
      <Stack.Screen name="DeckView" component={DeckView} />
      <Stack.Screen name="CreateDeckView" component={CreateDeckView} />
      <Stack.Screen name="AddCardView" component={AddCardView} />
      <Stack.Screen name="QuizView" component={QuizView} />
      <Stack.Screen name="ScoreView" component={ScoreView} />
    </Stack.Navigator>
  );
}

function MainStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: (Constants.statusBarHeight) }}>
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
