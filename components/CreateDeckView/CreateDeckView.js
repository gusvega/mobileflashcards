import React from 'react'
import { connect } from 'react-redux'

import { View, Text, StyleSheet, Button } from 'react-native'
import { Container, Content, Card, CardItem, Form, Item, Label, Input } from "native-base";
import { addDeck } from '../../actions/index'


class CreateDeckView extends React.Component {

   submit = () => {
      console.log('Submit Pressed')

      this.props.dispatch(addDeck({
         cuatro: {
            id: 1,
            name: "Deck 1",
            cards: [
               {
                  '8xf0y6ziyjabvozdd253nd': {
                     question: 'question uno',
                     answer: 'answer uno'
                  }
               },
               {
                  '8xf0y6ziyjabvozdd253nd': {
                     question: 'question dos',
                     answer: 'answer dos'
                  }
               },
               {
                  '8xf0y6ziyjabvozdd253nd': {
                     question: 'question tres',
                     answer: 'answer tres'
                  }
               },
               {
                  '8xf0y6ziyjabvozdd253nd': {
                     question: 'question cuatro',
                     answer: 'answer cuatro'
                  }
               },
               {
                  '8xf0y6ziyjabvozdd253nd': {
                     question: 'question cisco',
                     answer: 'answer cisco'
                  }
               },
            ],
         },
      }))
   }

   render() {
      // const {route} = this.props
      // const { state } = route.params;
      // console.log('STATE', state)
      console.log('PROPS - CREATE DECK: ', this.props)


      return (
         <Container>
            <Content padder>
               <Card>
                  <CardItem header button >
                     <Form style={styles.form}>
                        <Item floatingLabel>
                           <Label>Deck Name:</Label>
                           <Input />
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