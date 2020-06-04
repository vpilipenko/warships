const settings = {}

import { FieldSize, Coord } from '../../types/common'
import { UI } from '../../types/ui'


const getFieldsSize = (): {
  battlefieldSize: FieldSize,
  dockSize: FieldSize
} => {
  const { ships, whitespace } = settings

  let s = 0 // number of ships
  let d = 0 // number of decks

  ships.map(ship => {
    s = s + ship.quantity
    d = d + ship.quantity * ship.decks
  })
  
  const k = whitespace / 10 // empty cell ratio
  const с = (s * 2) + (d * 2) // number of cells at maximum density


  const battlefieldSide = Math.ceil(с / k / 10)
  const dockSide = Math.ceil(с / 10)

  return {
    battlefieldSize: [battlefieldSide, battlefieldSide],
    dockSize: [battlefieldSide, dockSide]
  }
}


export const getUI = (): UI => {
  const { battlefieldSize, dockSize } = getFieldsSize()
  const { padding } = settings

  const innerWidth = (battlefieldSize[0] * 2) + padding

  const titleP: Coord                     = [padding, padding]
  const titleS: FieldSize                 = [innerWidth, 1]

  const playerFieldP: Coord               = [padding, padding + titleS[1] + padding]
  const playerFieldS: FieldSize           = battlefieldSize

  const messageBarP: Coord                = [padding, padding + titleS[1] + padding + playerFieldS[1] + 1]
  const messageBarS: FieldSize            = [innerWidth, 2]

  const enemyFieldP: Coord                = [padding + playerFieldS[0] + padding, playerFieldP[1]]
  const enemyFieldS: FieldSize            = battlefieldSize

  const btnRandomPlacementP: Coord        = enemyFieldP
  const btnRandomPlacementS: FieldSize    = [battlefieldSize[0], 1]

  const btnClearPlacementP: Coord         = [btnRandomPlacementP[0], btnRandomPlacementP[1] + 1]
  const btnClearPlacementS: FieldSize     = btnRandomPlacementS

  const dockFieldP: Coord                 = [btnClearPlacementP[0], btnClearPlacementP[1] + 2]
  const dockFieldS: FieldSize             = dockSize

  const sheetP: Coord                     = [0, 0]
  const sheetS: FieldSize                 = [
    padding + playerFieldS[0] + padding + enemyFieldS[0] + padding,
    padding + titleS[1] + padding + playerFieldS[1] + 1 + messageBarS[1] + padding
  ]

  return {
    sheet: {
      name: 'sheet',
      position: sheetP,
      size: sheetS,
    },
    title: {
      name: 'title',
      position: titleP,
      size: titleS,
    },
    playerField: {
      name: 'playerField',
      position: playerFieldP,
      size: playerFieldS,
    },
    dockField: {
      name: 'dockField',
      position: dockFieldP,
      size: dockFieldS,
    },
    enemyField: {
      name: 'enemyField',
      position: enemyFieldP,
      size: enemyFieldS,
    },
    btnRandomPlacement: {
      name: 'btnRandomPlacement',
      position: btnRandomPlacementP,
      size: btnRandomPlacementS,
    },
    btnClearPlacement: {
      name: 'btnClearPlacement',
      position: btnClearPlacementP,
      size: btnClearPlacementS,
    },
    messageBar: {
      name: 'messageBar',
      position: messageBarP,
      size: messageBarS,
    },
  }
}