import React from 'react'
import { Text, View } from 'react-native';
import DeckCard from './DeckCard'
import { connect } from 'react-redux'
import { Card, CardItem, Body, Fab, Icon } from 'native-base';


class MainView extends React.Component {

   render() {

      console.log('DECKS: ', this.props.decks['uno'].name)
      console.log('DECKS: ', Object.keys(this.props.decks))

      return (

         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {Object.keys(this.props.decks).map((deck) => (
               <DeckCard key={deck.id} deck={this.props.decks[deck]} navigation={this.props.navigation} />
            ))}

            <Fab
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            onPress={() => this.props.navigation.navigate('CreateDeckView')}
            position="bottomRight">
            <Icon name="add" />
          </Fab>
         </View>
      );
   }
}

function mapStateToProps(state) {
   const { decks } = state
   return {
      decks
   }
}

export default connect(
   mapStateToProps,
)(MainView)