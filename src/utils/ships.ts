// import { Coord, Matrix, FIELD_SIZE } from '../types/common'
// import { SHIPS } from '../types/common'

// import { createMatrix, getSiblings } from './matrix'
// import { getRandomCoord } from './coords'

import { AVAILABLE_SHIPS, AVAILABLE_SHIP } from '../types/ships'
import { MATRIX, COORDINATE, SIZE } from '../types/common'

import {
  createMatrix,
  getSiblings,
} from './matrix'

import { getRandomInteger } from './int'
import { getRandomCoordinate } from './coordinates'


export const placeShipOnMatrix = (
  firstDeck: COORDINATE,
  lastDeck: COORDINATE,
  matrix: MATRIX,
  name: string,
): MATRIX => {
  const aX = firstDeck[0]
  const aY = firstDeck[1]
  const bX = lastDeck[0]
  const bY = lastDeck[1]

  const orient = aX === bX ? 'v' : 'h'
  const length = orient === 'v' ? bY - aY : bX - aX
  
  const result: MATRIX = matrix.map(row => ([...row]))
  
  for (let i = 0; i < length + 1; i++) {
    if (orient === 'v') {
      result[aY+i][aX] = `${name}_${i}`
    } else {
      result[aY][aX+i] = `${name}_${i}`
    }
  }

  return result
}


export const createShipPlacementMatrix = (
  availableShips: AVAILABLE_SHIPS,
  size: SIZE,
  type: String,
  orientation?: String,
): MATRIX => {
  let result = createMatrix(size)
  let lastCoordinate: COORDINATE = [-1, 0]

  let number = 0
  availableShips.map((availableShip, index) => {
    const { quantity } = availableShip

    for (let i = 0; i < quantity; i++) {
      if (type === 'linear') {
        const linear = placeLinear(result, availableShip, lastCoordinate, orientation, number)
        result = linear.placement
        lastCoordinate = linear.coordinate
      } else {
        const random = placeRandomly(result, availableShip, number)
        result = random
      }
      number++
    }
  })

  return result
}

const placeLinear = (
  matrix: MATRIX,
  ship: AVAILABLE_SHIP,
  lastCoordinate: COORDINATE,
  orientation: String,
  number: number,
): {
  placement: MATRIX,
  coordinate: COORDINATE,
} => {
  let result = matrix

  const fire = () => {
    const max = orientation === 'vertical'
     ? matrix.length - 1
     : matrix.length - ship.decks
    if (lastCoordinate[0] >= max) {
      lastCoordinate = [0, lastCoordinate[1] + 1]
    } else {
      lastCoordinate = [lastCoordinate[0] + 1, lastCoordinate[1]]
    }

    const firstDeck = lastCoordinate
    const lastDeck: COORDINATE = orientation === 'vertical'
      ? [firstDeck[0], firstDeck[1] + ship.decks - 1]
      : [firstDeck[0] + ship.decks - 1, firstDeck[1]]

    const targetArea = getSiblings(matrix, firstDeck, lastDeck)
    const isTargetAreaFree = targetArea.flat().every(c => c === 0)

    if (isTargetAreaFree) {
      result = placeShipOnMatrix(firstDeck, lastDeck, matrix, `${number}_${ship.name}_${orientation}`)
    } else {
      fire()
    }
  }
  fire()

  return {
    placement: result,
    coordinate: lastCoordinate,
  }
}

const placeRandomly = (
  matrix: MATRIX,
  ship: AVAILABLE_SHIP,
  number: number,
): MATRIX => {
  let result = matrix

  const fire = () => {
    const randomOrientation = getRandomInteger(2) ? 'vertical' : 'horizontal'
    const max = matrix.length - ship.decks
    const firstDeck = getRandomCoordinate(max, max)
    const lastDeck: COORDINATE = randomOrientation === 'vertical'
      ? [firstDeck[0], firstDeck[1] + ship.decks - 1]
      : [firstDeck[0] + ship.decks - 1, firstDeck[1]]

    const targetArea = getSiblings(result, firstDeck, lastDeck)
    const isTargetAreaFree = targetArea.flat().every(c => c === 0)

    if (isTargetAreaFree) {
      result = placeShipOnMatrix(firstDeck, lastDeck, result, `${number}_${ship.name}_${randomOrientation}`)
    } else {
      fire()
    }
  }
  fire()

  return result
}


export const getShipsFromMatrix = (matrix: MATRIX) => {
  const ids: string[] = []
  const data: any = {}
  
  matrix.map((a, y) => {
    a.map((b, x) => {
      if (!b) { return }
      b = `${b}`
      const shipData = b.split('_')
      
      const number = shipData[0]
      const name = shipData[1]
      const orientation = shipData[2] === 'horizontal' ? 0 : 1
      const deck = shipData[3]

      const position = deck === '0' ? [x,y] : [0,0]
      const id = `${number}_${name}_${orientation}`
    
      if (!ids.includes(id)) {
        ids.push(id)
        data[id] = {
          coords: [[x, y]],
          name: shipData[1],
          decks: 1,
          position,
          size: [1, 1],
        }
      } else {
        data[id].coords.push([x, y])
        data[id].decks = data[id].decks + 1
        data[id].size[orientation] = data[id].size[orientation] + 1
      }
    })
  })

  return { ids, data }
}