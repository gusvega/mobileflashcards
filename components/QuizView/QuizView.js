import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Header, View, DeckSwiper, Card, CardItem, Text, Left, Body, Icon, Button, Toast } from 'native-base';
import { Alert } from 'react-native'
class QuizView extends Component {

  constructor() {
    super();
    this.state = {
      content: false,
      correct: [],
      wrong: [],
      buttonsDisabled: false
    }
  }

  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }))
  }

  render() {
    const deck = this.props.route.params.deck


    console.log('QUIZ VIEW - PROPS', this.props)
    console.log('QUIZ VIEW - DECK', Object.values(deck.cards))
    console.log('STATE', this.state)


    return (
      <Container>
        <View>
          <Text style={{ margin: 10 }}> - Press on question to reveal answer</Text>
          <Text style={{ margin: 10 }}> - Record your answers using the buttons below</Text>
          <Text style={{ margin: 10, marginBottom: 40 }}> - You can swipe or use the buttons down below</Text>




          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            looping={false}
            dataSource={deck.cards}
            renderEmpty={() =>
              <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', }}>
                <Text >You got {this.state.correct.length} out of {deck.cards.length} </Text>
                <View style={{ margin: 60, flexDirection: 'row', }}>
                  <Button style={{ margin: 30 }} onPress={() => {
                    this.props.navigation.goBack()
                  }}><Text>Back to Deck</Text></Button>
                  <Button style={{ margin: 30 }} onPress={() => {
                    this.props.navigation.navigate("Quiz");
                    // needs work
                  }}><Text>Restart Quiz</Text></Button>
                </View>
              </View>
            }
            renderItem={item =>

              <Card style={{ elevation: 3, height: 600, alignItems: 'center', flexDirection: 'column', justifyContent: 'space-around', }} >

                <CardItem style={{ justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                  <Left>
                    <Body>
                      <Text style={{ fontSize: 40 }} onPress={this.componentHideAndShow}>{item.question}</Text>

                      {
                        this.state.content ? <Text style={{ fontSize: 20 }} >{item.answer}</Text> : null
                      }
                    </Body>
                  </Left>
                </CardItem>

                <CardItem cardBody>
                  <View style={{ flexDirection: 'row' }}>

                    <Button disabled={this.state.buttonsDisabled} style={{ margin: 20 }} onPress={() => {
                      this.setState(state => {
                        const correct = state.correct.concat(1);
                        const buttonsDisabled = true

                        return {
                          correct,
                          buttonsDisabled

                        };
                      })
                    }}>
                      <Text>Correct</Text>
                    </Button>
                    <Button disabled={this.state.buttonsDisabled} style={{ margin: 20 }} onPress={() => {
                      console.log(this.state.buttonsDisabled)
                      this.setState(state => {
                        const wrong = state.wrong.concat(1);
                        const buttonsDisabled = true
                        return {
                          wrong,
                          buttonsDisabled
                        };
                      })
                    }}>
                      <Text>Wrong</Text>
                    </Button>
                  </View>
                </CardItem>
                <View><Text style={{ fontSize: 20 }} onPress={this.componentHideAndShow}>{deck.cards.indexOf(item) + 1} / {deck.cards.length}</Text></View>

                <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>

                  <Button iconLeft onPress={() => {
                    this.setState({
                      content : false,
                      buttonsDisabled : false
                      })
                    this._deckSwiper._root.swipeLeft()
                    }}>
                    <Icon name="arrow-back" />
                    <Text>Swipe Left</Text>
                  </Button>

                  <Button iconRight onPress={() => {
                    this.setState({
                      content : false,
                      buttonsDisabled : false

                      })
                    this._deckSwiper._root.swipeRight()
                  }}>
                    <Text>Swipe Right</Text>
                    <Icon name="arrow-forward" />
                  </Button>

                </View>

              </Card>




            }
          />

        </View>




      </Container>
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
)(QuizView)