import { mainMenuPresets } from './mainMenu/mainMenuPresets'

import { PRESETS } from '../../types/presets'


const presets: PRESETS = {
  ...mainMenuPresets,
  world: {
    props: { outlined: true, grid: true }
  },
  playerBattlefield: {
    props: { outlined: true, xAxis: true, yAxis: true }
  },
  heading: {
    props: { size: 'xl', weight: 'bold' }
  },
  deployTitle: {
    props: { text: 'Place your ships on battlefield' }
  },
  fourDeck: {
    props: { decks: 4 }
  },
  shipOnFire: {
    props: { onFire: true }
  },
}

export default presets