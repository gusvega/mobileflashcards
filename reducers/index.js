import { combineReducers } from 'redux';
import { ADD_CARD, ADD_DECK, DELETE_DECK } from '../actions';


export let decks = [
   {
      id: 1,
      name: "Deck 1",
      cards: [
         {
            question: 'question uno',
            answer: 'answer uno'
         },
         {
            question: 'question dos',
            answer: 'answer dos'
         },
         {
            question: 'question tres',
            answer: 'answer tres'
         },
         {
            question: 'question cuatro',
            answer: 'answer cuatro'
         },
         {
            question: 'question cisco',
            answer: 'answer cisco'
         },
      ],
   },
   {
      id: 2,
      name: "Deck 2",
      cards: [
         {
            question: 'question uno',
            answer: 'answer uno'
         },
         {
            question: 'question dos',
            answer: 'answer dos'
         },
         {
            question: 'question tres',
            answer: 'answer tres'
         },
         {
            question: 'question cuatro',
            answer: 'answer cuatro'
         },
         {
            question: 'question cisco',
            answer: 'answer cisco'
         },
      ],
   },
   {
      id: 3,
      name: "Deck 3",
      cards: [
         {
            question: 'question uno',
            answer: 'answer uno'
         },
         {
            question: 'question dos',
            answer: 'answer dos'
         },
         {
            question: 'question tres',
            answer: 'answer tres'
         },
         {
            question: 'question cuatro',
            answer: 'answer cuatro'
         },
         {
            question: 'question cisco',
            answer: 'answer cisco'
         },
      ],
   }
]

const decksReducer = (state = decks, action) => {
   let deck = action && action.deck

   let deckID = deck && deck.id
   let targetDeck = deckID && decks.find( ({ id }) => id === deckID );
   let cards = targetDeck && targetDeck.cards

   let card = action && action.card



   switch (action.type) {
      case ADD_DECK:
         console.log('deck', action.deck)
      
         decks.push(action.deck)
         return {...state}
      case DELETE_DECK:
         delete decks[deck]
         return state
      case ADD_CARD:
         console.log('deck', deck)
         console.log('deckID', deckID)
         console.log('targetDeck', targetDeck)
         console.log('cards', cards)
         console.log('card', card)

         cards.push(card)
         return {...state}
      default:
         return state
   }
};

export default combineReducers({
   decks: decksReducer
});