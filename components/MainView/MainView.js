import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { Card, CardItem, Body, Fab, Icon } from 'native-base';


class MainView extends React.Component {

   render() {

      const {decks, navigation} = this.props
      Object.values(decks).map((deck) => console.log('Deck', deck))
      console.log('MAIN VIEW PROPS:::', this.props)

      return (

         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {Object.values(decks).map((deck) => (
               <Card style={styles.card} >
                  <TouchableOpacity onPress={() => navigation.navigate('Deck', {
                     deck: deck,
                  })}>
                     <CardItem >
                        <Body>
                           <Text style={styles.name}>
                              {deck.name}
                           </Text>
                           <Text>
                           {deck.cards.length} Questions
                           </Text>
                        </Body>
                     </CardItem>
                  </TouchableOpacity>
               </Card>
            ))}
            <Fab
               direction="up"
               containerStyle={{}}
               style={{ backgroundColor: '#5067FF' }}
               onPress={() => this.props.navigation.navigate('Create New Deck', {
                  state: this.props,
               })}
               position="bottomRight">
               <Icon name="add" />
            </Fab>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   card: {
      width: 350,
      height: 70,
   },
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
)(MainView)