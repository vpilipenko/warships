const settings = {}

import { DEFAULT_STATE } from '../types/state'


const defaultState: DEFAULT_STATE = {
  layout: [],
  settings: {
    cellSize: '2rem',
    whitespace: 6,
    padding: 2,
    availableShips: [
      {
        name: 'fourDeck',
        decks: 4,
        quantity: 1,
      },
      {
        name: 'tripleDeck',
        decks: 3,
        quantity: 4,
      },
      {
        name: 'doubleDeck',
        decks: 2,
        quantity: 7,
      },    
      {
        name: 'singleDeck',
        decks: 1,
        quantity: 4,
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