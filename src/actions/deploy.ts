import state from '../store'

import { createLinearShipPlacementMatrix, getShipsFromMatrix } from '../utils/ships'


const $ui = state.select('ui')
const $settings = state.select('settings')
const $squadron = state.select('squadron')

export const initDeploy = () => {
  const dockSize = $ui.get(['dockField', 'size'])
  const ships = $settings.get('ships')

  const dockPlacement = createLinearShipPlacementMatrix(dockSize, ships)
  
  $squadron.set('dock', dockPlacement)

  const shipsData = getShipsFromMatrix(dockPlacement)
  const { ids, data } = shipsData

  $squadron.set('ids', ids)
  $squadron.set('data', data)
}