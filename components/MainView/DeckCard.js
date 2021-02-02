import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { Card, CardItem, Body } from 'native-base';
import { connect } from 'react-redux'



function DeckCard({deck, navigation}) {
   console.log('PROPS::::', deck.name)
   return (
      <Card style={styles.card} >
      <TouchableOpacity onPress={() => navigation.navigate('Deck')}>
         <CardItem >
            <Body>
               <Text>
                  {deck.name}
               </Text>
               <Text>
                  {deck.cards.length} Questions
               </Text>
            </Body>
         </CardItem>
         </TouchableOpacity>
      </Card>

   )
}

const styles = StyleSheet.create({
   card: {
      width: 350,
      height: 70
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
)(DeckCard)