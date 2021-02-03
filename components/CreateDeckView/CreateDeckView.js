import React from 'react'
import { connect } from 'react-redux'

import { View, Text, StyleSheet, Button } from 'react-native'
import { Container, Content, Card, CardItem, Form, Item, Label, Input } from "native-base";
import { addDeck } from '../../actions/index'


class CreateDeckView extends React.Component {

   constructor(props) {
      super(props);
      this.state = { value: '' };
   }

   generateUID() {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
   }

   formatDeck(deckName) {
      return {
         [deckName]: {
            id: this.generateUID(),
            name: deckName,
            cards: []
         }
      }
   }

   submit = () => {
      const formattedDeck = this.formatDeck(this.state.value)
      this.props.dispatch(addDeck(formattedDeck))
      this.props.navigation.navigate("Home");

   }

   render() {
      console.log('PROPS - CREATE DECK: ', this.props)
      console.log('value: ', this.state.value)

      return (
         <Container>
            <Content padder>
               <Card>
                  <CardItem header button >
                     <Form style={styles.form}>
                        <Item floatingLabel>
                           <Label>Deck Name:</Label>
                           <Input onChangeText={val => this.setState({ value: val })} />
                        </Item>
                     </Form>
                  </CardItem>
                  <CardItem footer>
                     <Button title='Submit' onPress={this.submit} />
                  </CardItem>
               </Card>
            </Content>
         </Container>
      );
   }
}

const styles = StyleSheet.create({
   form: {
      width: 350,
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
)(CreateDeckView)