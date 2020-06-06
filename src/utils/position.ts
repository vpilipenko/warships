import { POSITION, POSITION_ABSOLUTE } from '../types/common'


const POSITION_CACHE: {
  [key: string]: POSITION_ABSOLUTE
} = {}

export const getAbsolutePosition = (
  position: POSITION, cellSize: (string|number)
): POSITION_ABSOLUTE => {
  const id = `${position.join('_')}_${cellSize}`
  
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

  let left = position[0] * sizeInt + unit
  let top = position[1] * sizeInt + unit

  const result: POSITION_ABSOLUTE = [left, top]
  
  POSITION_CACHE[id] = result

  return result
}