import { SIZE, SIZE_ABSOLUTE } from '../types/common'

const SIZE_CACHE: {
  [key: string]: SIZE_ABSOLUTE
} = {}

export const getAbsoluteSize = (
  size: SIZE, cellSize: (number|string)
): SIZE_ABSOLUTE => {
  const id = `${size.join('_')}_${cellSize}`

  if (SIZE_CACHE[id]) {
    return SIZE_CACHE[id]
  }

  let sizeInt = 0
  let unit = 'px'

  if (typeof cellSize === 'string') {
    unit = cellSize.match(/[a-zA-z]+$/).pop()
    sizeInt = +cellSize.replace(unit, '')
  } else {
    sizeInt = cellSize
  }

  let width = size[0] * sizeInt + unit
  let height = size[1] * sizeInt + unit

  const result: SIZE_ABSOLUTE = [width, height]
  
  SIZE_CACHE[id] = result

  return result
}