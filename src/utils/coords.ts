import { Coord } from '../types/common'

import { getRandomInt } from './ints'


export const getRandomCoord = (xMax:number, yMax:number): Coord => {
  return [getRandomInt(xMax), getRandomInt(yMax)]
}