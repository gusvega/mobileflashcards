import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet } from 'react-native'

function DeckView({ route, navigation }) {
  const { deck } = route.params;

  console.log('DECK_VIEW', deck)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.name} >{deck.name}</Text>
        <Text>{deck.cards.length} Questions</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title='Add Card' onPress={() => navigation.navigate('Add New Card')} />
        <Button title='Start Quiz' onPress={() => navigation.navigate('Quiz')} />
        <Button title='Delete Deck' />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  name: {
    fontSize: 30
  }
});

function mapStateToProps(state) {
  const { decks } = state
  return {
    decks
  }
}

export default connect(
  mapStateToProps,
)(DeckView)