import { AVAILABLE_SHIPS } from '../types/ships'
import { SIZE } from '../types/common'


export const calculateBattlefieldSize = (
  availableShips: AVAILABLE_SHIPS,
  whitespaceRatio: number,
): SIZE => {
  let s = 0 // total number of ships
  let d = 0 // total number of decks

  availableShips.map(ship => {
    s = s + ship.quantity
    d = d + ship.quantity * ship.decks
  })
  
  const k = whitespaceRatio // empty cell ratio
  const c = (s * 2) + (d * 2) // number of cells at maximum density

  const battlefieldSide = Math.ceil(c / k / 10)

  return [battlefieldSide, battlefieldSide]
}


export const calculateWorldSize = (
  bfSize: SIZE
): SIZE => {
  const height = 6 + bfSize[1] + 4
  const width = 2 + bfSize[0] + 2 + bfSize[0] + 2
  return [width, height]
}