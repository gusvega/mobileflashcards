import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native'
import { deleteDeck } from '../../actions/index'

import { clearLocalNotification, setLocalNotification } from '../../utils/helpers'


class DeckView extends React.Component {

  deck = this.props.route.params.deck


  handleDelete = () => {
    console.log('PRESSED')
    this.props.dispatch(deleteDeck(this.deck.id))
    this.props.navigation.navigate("Home");
  }

  render() {
    // const { decks, navigation } = this.props
    const { navigation, decks } = this.props

    console.log('DECK VIEW PROPS: ', this.props)
    console.log('DECK VIEW - DECK: ', this.props.route.params.deck)

    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.name} >{this.deck.name}</Text>
          <Text>{decks[this.deck.id]['cards'].length} Questions</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button title='Add Card' onPress={() => navigation.navigate('Add New Card', { deck: this.deck })} />
          <Button title='Start Quiz' onPress={() => {
            navigation.navigate('Quiz', { deck: this.deck })
            clearLocalNotification().then(setLocalNotification)
          }} />
          <Button title='Delete Deck' onPress={this.handleDelete} />
        </View>
      </SafeAreaView>
    );
  }
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