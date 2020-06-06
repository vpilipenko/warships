const settings = {}

import { DEFAULT_STATE } from '../types/state'


const defaultState: DEFAULT_STATE = {
  layout: [],
  settings: {
    cellSize: '2rem',
    whitespaceRatio: .6, // .6 - classic
    availableShips: [
      {
        name: 'fourDeck',
        decks: 4,
        quantity: 1, // 1 - classic
      },
      {
        name: 'tripleDeck',
        decks: 3,
        quantity: 2, // 2 - classic
      },
      {
        name: 'doubleDeck',
        decks: 2,
        quantity: 3, // 3 - classic
      },    
      {
        name: 'singleDeck',
        decks: 1,
        quantity: 4, // 4 - classic
      },
    ]
  },
  core: {
    step: 'mainMenu',
    isCoreLoaded: false,
    isLayoutLoaded: false,
  }
}

export default defaultState