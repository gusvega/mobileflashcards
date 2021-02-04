import { combineReducers } from 'redux';
import { ADD_CARD, ADD_DECK, DELETE_DECK } from '../actions';


export let decks = {
   1: {
      id: 1,
      name: "Deck 1",
      cards: [
         {
            '8xf0y6ziyjabvozdd253nd': {
               id: '8xf0y6ziyjabvozdd253nd',
               question: 'question uno',
               answer: 'answer uno'
            }
         },
         {
            '8xf0y6ziyjabvozdd253nd': {
               id: '8xf0y6ziyjabvozdd253nd',
               question: 'question dos',
               answer: 'answer dos'
            }
         },
         {
            '8xf0y6ziyjabvozdd253nd': {
               id: '8xf0y6ziyjabvozdd253nd',
               question: 'question tres',
               answer: 'answer tres'
            }
         },
         {
            '8xf0y6ziyjabvozdd253nd': {
               id: '8xf0y6ziyjabvozdd253nd',
               question: 'question cuatro',
               answer: 'answer cuatro'
            }
         },
         {
            '8xf0y6ziyjabvozdd253nd': {
               id: '8xf0y6ziyjabvozdd253nd',
               question: 'question cisco',
               answer: 'answer cisco'
            }
         },
      ],
   },
   2: {
      id: 2,
      name: "Deck 2",
      cards: [
         {
            '8xf0y6ziyjabvozdd253nd': {
               id: '8xf0y6ziyjabvozdd253nd',
               question: 'question uno',
               answer: 'answer uno'
            }
         },
         {
            '8xf0y6ziyjabvozdd253nd': {
               id: '8xf0y6ziyjabvozdd253nd',
               question: 'question dos',
               answer: 'answer dos'
            }
         },
         {
            '8xf0y6ziyjabvozdd253nd': {
               id: '8xf0y6ziyjabvozdd253nd',
               question: 'question tres',
               answer: 'answer tres'
            }
         },
         {
            '8xf0y6ziyjabvozdd253nd': {
               id: '8xf0y6ziyjabvozdd253nd',
               question: 'question cuatro',
               answer: 'answer cuatro'
            }
         },
         {
            '8xf0y6ziyjabvozdd253nd': {
               id: '8xf0y6ziyjabvozdd253nd',
               question: 'question cisco',
               answer: 'answer cisco'
            }
         },
      ],
   },
   3: {
      id: 3,
      name: "Deck 3",
      cards: [
         {
            '8xf0y6ziyjabvozdd253nd': {
               id: '8xf0y6ziyjabvozdd253nd',
               question: 'question uno',
               answer: 'answer uno'
            }
         },
         {
            '8xf0y6ziyjabvozdd253nd': {
               id: '8xf0y6ziyjabvozdd253nd',
               question: 'question dos',
               answer: 'answer dos'
            }
         },
         {
            '8xf0y6ziyjabvozdd253nd': {
               id: '8xf0y6ziyjabvozdd253nd',
               question: 'question tres',
               answer: 'answer tres'
            }
         },
         {
            '8xf0y6ziyjabvozdd253nd': {
               id: '8xf0y6ziyjabvozdd253nd',
               question: 'question cuatro',
               answer: 'answer cuatro'
            }
         },
         {
            '8xf0y6ziyjabvozdd253nd': {
               id: '8xf0y6ziyjabvozdd253nd',
               question: 'question cisco',
               answer: 'answer cisco'
            }
         },
      ],
   }
}

const decksReducer = (state = decks, action) => {
   console.log('ACTION: ', action)
   switch (action.type) {
      case ADD_DECK:
         return {
            ...state,
            ...action.deck
         }
      case DELETE_DECK:
         delete decks[action.deck]
         return {
            ...state
         }
      case ADD_CARD:
         decks[action.deck.id]['cards'].push([action.card])
         return {
            ...state
         }  
      default:
         return state
   }
};

export default combineReducers({
   decks: decksReducer
});