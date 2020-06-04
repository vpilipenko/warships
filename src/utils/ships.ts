import { Coord, Matrix, FIELD_SIZE } from '../types/common'
import { SHIPS } from '../types/common'

import { createMatrix, getSiblings } from './matrix'
import { getRandomInt } from './ints'
import { getRandomCoord } from './coords'


export const placeShipOnMatrix = (
  firstDeck: Coord,
  orientation: String,
  decks: Number,
  matrix: Matrix,
  number: number,
  name: string,
): Matrix => {
  const x = firstDeck[0]
  const y = firstDeck[1]
  
  const result: Matrix = matrix.map((row: number[]) => ([...row]))

  for (let i = 0; i < decks; i++) {
    const id = `${number}_${name}_${i}`
    if (orientation === 'v') {
      result[y+i][x] = id
    } else {
      result[y][x+i] = id
    }
  }

  return result
}


// export const createRandomShipPlacementMatrix = (
//   size: FIELD_SIZE,
//   ships: SHIPS
// ): Matrix => {
//   const sizeX = size[0]
//   const sizeY = size[1]
  
//   let result = createMatrix(sizeX, sizeY)
  
//   ships.map(shipType => {
//     const { quantity, decks: d } = shipType
//     const decks = d - 1
//     const xMax = sizeX - decks
//     const yMax = sizeY - decks
    
//     for (let i = 0; i < quantity + 1; i++) {
//       const randomPlacement = (): void => {
//         const randomOrientation = getRandomInt(2) ? 'v' : 'h'
//         const firstDeck = getRandomCoord(xMax, yMax)
//         const lastDeck: Coord = randomOrientation === 'h'
//           ? [firstDeck[0] + decks - 1, firstDeck[1]]
//           : [firstDeck[0], firstDeck[1] + decks - 1]
  
//         const targetArea = getSiblings(result, firstDeck, lastDeck)
//         const isTargetAreaFree = !targetArea.flat().includes(1)
        
//         if (isTargetAreaFree) {
//           result = placeShipOnMatrix(firstDeck, randomOrientation, decks, result)
//         } else {
//           randomPlacement()
//         }
//       }
//       randomPlacement()
//     }
//   })

//   return result
// }

export const createLinearShipPlacementMatrix = (
  size: FIELD_SIZE,
  ships: SHIPS
): Matrix => {
  const sizeX = size[0]
  const sizeY = size[1]
  
  let result = createMatrix(sizeX, sizeY)

  let lastTarget: Coord = [-1, 0]

  ships.map((shipType) => {
    const { name, quantity, decks } = shipType
    
    for (let i = 0; i < quantity; i++) {     
      const linearPlacement = (): void => {
        if (lastTarget[0] >= sizeX - 1) {
          lastTarget = [0, lastTarget[1] + 1]
        } else {
          lastTarget = [lastTarget[0] + 1, lastTarget[1]]
        }
  
        const firstDeck = lastTarget
        const lastDeck: Coord = [firstDeck[0], firstDeck[1] + decks - 1]
  
        const targetArea = getSiblings(result, firstDeck, lastDeck)
        const isTargetAreaFree = targetArea.flat().every(c => c === 0)

        if (isTargetAreaFree) {
          result = placeShipOnMatrix(firstDeck, 'v', decks, result, i, name)
        } else {
          linearPlacement()
        }
      }
      linearPlacement()
    }
  })

  return result
}


export const getShipsFromMatrix = (matrix: Matrix) => {
  const ids: string[] = []
  const data: any = {}

  matrix.map((a, y) => {
    a.map((b, x) => {
      if (!b) { return }
      b = `${b}`
      const shipData = b.split('_')
      const id = shipData[0] + '_' + shipData[1]
      if (!ids.includes(id)) {
        ids.push(id)
        data[id] = {
          coords: [[x, y]],
          name: shipData[1],
          length: 1
        }
      } else {
        data[id].coords.push([x, y])
        data[id].length = data[id].length + 1
      }
    })
  })

  return { ids, data }
}