import React from 'react'
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
class MainView extends React.Component {


   render() {
      console.log('DECKS: ', this.props.decks['uno'].name)
      console.log('DECKS: ', Object.keys(this.props.decks))
      
      return (

         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Decks: </Text>
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