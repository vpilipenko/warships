import { Coord, CoordAbsolute } from '../types/common'


const POSITION_CACHE: {
  [key: string]: CoordAbsolute
} = {}

export const getAbsolutePosition = (
  coord: Coord, cellSize: (string|number)
): CoordAbsolute => {
  const id = `${coord.join('_')}_${cellSize}`
  
  if (POSITION_CACHE[id]) {
    return POSITION_CACHE[id]
  }

  let sizeInt = 0
  let unit = 'px'

  if (typeof cellSize === 'string') {
    unit = cellSize.match(/[a-zA-z]+$/).pop()
    sizeInt = +cellSize.replace(unit, '')
  } else {
    sizeInt = cellSize
  }

  let left = coord[0] * sizeInt + unit
  let top = coord[1] * sizeInt + unit

  const result: CoordAbsolute = [left, top]
  
  POSITION_CACHE[id] = result

  return result
}