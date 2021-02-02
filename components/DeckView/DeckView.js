import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native'

function DeckView({ route, decks, navigation }) {
  const { deck } = route.params;

  console.log('DECK_VIEW', deck)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{deck.name}</Text>
      <Text>{deck.cards.length} Questions</Text>
      <Button title='Add Card' onPress={() => navigation.navigate('Add New Card')} />
      <Button title='Start Quiz' onPress={() => navigation.navigate('Quiz')} />
      <Button title='Delete Deck' />

    </View>
  );

}

function mapStateToProps(state) {
  const { decks } = state
  return {
     decks
  }
}

export default connect(
  mapStateToProps,
)(DeckView)