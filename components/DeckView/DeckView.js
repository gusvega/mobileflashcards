import React from 'react'
import { View, Text, Button } from 'react-native'

function DeckView({ deck, navigation }) {
  console.log('DECKS::', deck)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>DeckViews</Text>
      <Button title='Add Card' onPress={() => navigation.navigate('AddCardView')} />
      <Button title='Start Quiz' onPress={() => navigation.navigate('QuizView')} />
      <Button title='Delete Deck' />

    </View>
  );

}

export default DeckView