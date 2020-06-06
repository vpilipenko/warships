import { COORDINATE } from '../types/common'

import { getRandomInteger } from './int'


export const getRandomCoordinate = (xMax:number, yMax:number): COORDINATE => {
  return [getRandomInteger(xMax), getRandomInteger(yMax)]
}