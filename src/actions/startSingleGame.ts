import state from '../store'

import { LAYOUT } from '../types/layout'

import {
  calculateBattlefieldSize,
  calculateWorldSize,
} from '../utils/ui'
import {
  createShipPlacementMatrix,
  getShipsFromMatrix,
} from '../utils/ships'

import { prepareLayout } from '../ui/layouts/prepareLayout'

const $layout = state.select('layout')


export const startSingleGame = () => {
  // $layout.set(prepareLayout)
  calcBattlefieldSize()
}


export const calcBattlefieldSize = () => {
  const settings = state.get('settings')
  const { availableShips, whitespaceRatio } = settings

  const bfSize = calculateBattlefieldSize(availableShips, whitespaceRatio)
  const worldSize = calculateWorldSize(bfSize)
  const shipPlacementMatrix = createShipPlacementMatrix(availableShips, bfSize, 'linear', 'horizontal')
  const shipsData = getShipsFromMatrix(shipPlacementMatrix)

  const layout = prepareLayout
  
  layout[0].size = worldSize

  const playerBattlefield = layout[0].children[3]
  const dock = layout[0].children[4]

  playerBattlefield.size = bfSize

  dock.size = bfSize
  dock.position[0] = 2 + bfSize[0] + 2
  dock.children = shipsData.ids.map(id => {
    const ship = shipsData.data[id]
    return {
      type: 'LAYER',
      presets: ['ship'],
      position: ship.position,
      size: ship.size,
    }
  })

  $layout.set(layout)
}