import { combineReducers } from 'redux';
import { ADD_DECK } from '../actions';


let INITIAL_STATE = {
   uno: {
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
   dos: {
      id: 2,
      name: "Deck 2",
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
   tres: {
      id: 3,
      name: "Deck 3",
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
   }
}

const decksReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case ADD_DECK :
         return {
           ...state,
           ...action.deck
         }
      default:
         return state
   }
};

export default combineReducers({
   decks: decksReducer
});