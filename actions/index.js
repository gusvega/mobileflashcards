export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const DELETE_DECK = 'DELETE_DECK'
export const ADD_CARD = 'ADD_CARD'
export const UPDATE_STATE = 'UPDATE_STATE'

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function updateState () {
  return {
    type: UPDATE_STATE,
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function deleteDeck (deck) {
  return {
    type: DELETE_DECK,
    deck,
  }
}

export function addCard (deck, card) {
  return {
    type: ADD_CARD,
    card,
    deck
  }
}