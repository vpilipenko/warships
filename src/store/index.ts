import Baobab from 'baobab'
import { root } from 'baobab-connect'

import defaultState from './defaultState'

let state: Baobab = new Baobab()

declare global {
  interface Window {
    tree: Baobab;
  }
}

export const configureStore = (settings: object = {}): void => {
  state.set(defaultState)
  root(state)
  window.tree = state
}

export default state