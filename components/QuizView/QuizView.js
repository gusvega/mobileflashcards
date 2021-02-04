import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Header, View, DeckSwiper, Card, CardItem, Text, Left, Body, Icon, Button } from 'native-base';
const cards = [
  {
    text: 'Card One',
    name: 'One',
  },
  {
    text: 'Card Two',
    name: 'Two',
  },
  {
    text: 'Card Three',
    name: 'Three',
  },
];
class QuizView extends Component {

  constructor() {
    super();
    this.state = {
      content: false
    }
  }

  componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }))
  }

  
  

  render() {
    const deck  = this.props.route.params.deck


    console.log('QUIZ VIEW - PROPS', this.props)
    console.log('QUIZ VIEW - DECK', Object.values(deck.cards[0]))

    const newArray = []

    deck.cards.map((element, index) => {
      console.log(Object.values(deck.cards[index]))
      // newArray.push({})
    });

    console.log(newArray)

    

    return (
      <Container>
        <View>
          <Text style={{ margin:10}}> - Press on question to reveal answer</Text>
          <Text style={{ margin:10}}> - Record your answers using the buttons below</Text>

          <View style={{justifyContent: 'center', alignItems: 'center' , flexDirection: 'row',}}>

          <Button style={{ margin:20}}>
            <Text>Correct</Text>
          </Button>
          <Button style={{ margin:20}}>
            <Text>Wrong</Text>
          </Button>
          </View>
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={cards}

            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>
            }

            renderItem={item =>

              <Card style={{ elevation: 3, height: 300, justifyContent: 'center', alignItems: 'center' }} >

                <CardItem >
                  <Left>
                    <Body>
                      <Text style={{ fontSize:40}} onPress={this.componentHideAndShow}>{item.name}</Text>
                      {
                        this.state.content ? <Text style={{ fontSize:20}} >NativeBase</Text> : null
                      }
                      
                    </Body>
                  </Left>
                </CardItem>

                <CardItem cardBody>
                  {/* <Image style={{ height: 300, flex: 1 }} source={item.image} /> */}
                </CardItem>

              </Card>

            }
          />
        </View>



        <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>

          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Text>Swipe Left</Text>
          </Button>

          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Text>Swipe Right</Text>
            <Icon name="arrow-forward" />
          </Button>

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