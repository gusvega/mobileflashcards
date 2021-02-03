import React from 'react'
import { connect } from 'react-redux'

import { View, StyleSheet, Button, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import { Form, Item, Input, Label } from 'native-base';
import { addCard } from '../../actions';


class AddCardView extends React.Component {

  deck  = this.props.route.params.deck

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      question: '',
      answer: ''
    };
  }

  generateUID = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  formatCard = (id, question, answer) => {
    return {
      [id]: {
        id: id,
        question: question,
        answer: answer
      }
    }
  }

  submit = () => {
    const formattedCard = this.formatCard(this.generateUID(), this.state.question, this.state.answer)
    console.log('formattedCard', formattedCard)
    this.props.dispatch(addCard(this.deck, formattedCard))

    this.props.navigation.navigate("Deck");
  }

  render() {
    console.log('ADD CARD VIEW - PROPS: ', this.props)
    console.log('ADD CARD VIEW - DECK: ', this.deck)



    return (

      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>

        <Form style={styles.form}>

          <Item floatingLabel>
            <Label>Question</Label>

            <Input onChangeText={val => this.setState({ question: val })} />
          </Item>
          <Item floatingLabel last>
            <Label>Answer</Label>
            <Input onChangeText={val => this.setState({ answer: val })} />
          </Item>
          <Button title='Submit' onPress={this.submit} />

        </Form>
      </View>
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
)(AddCardView)