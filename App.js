import React from 'react';
import { Text, View } from 'react-native';

import { purple, white } from './utils/colors'
import MainView from './components/MainView/MainView'
import CreateDeckView from './components/CreateDeckView/CreateDeckView'

import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckView from './components/DeckView/DeckView';
import AddCardView from './components/AddCardView/AddCardView';
import QuizView from './components/QuizView/QuizView'
import ScoreView from './components/ScoreView/ScoreView'
import middleware from './middleware';

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
class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Provider store={createStore(reducer, middleware)}>
          <MainStatusBar backgroundColor={purple} barStyle="light-content" />
          <MyStack />
        </Provider>
      </NavigationContainer>
    );
  }
}

export default App