import { mainMenuPresets } from './mainMenu/mainMenuPresets'
import { preparePresets } from './prepare/preparePresets'

import { PRESETS } from '../../types/presets'


const presets: PRESETS = {
  ...mainMenuPresets,
  ...preparePresets,
  world: {
    props: { grid: true, outlined: true, scale: .78 }
  },
  isometric: {
    props: { rotate: [45, 0, -30] }
  },
  playerBattlefield: {
    props: { outlined: true, xAxis: true, yAxis: true }
  },
  ship: {
    props: { outlined: true },
  },
  fourDeck: {
    props: { decks: 4 }
  },
  shipOnFire: {
    props: { onFire: true }
  },
}

export default presets