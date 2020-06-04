import { FieldSizeAbsolute } from '../types/common'

const SIZE_CACHE: {
  [key: string]: FieldSizeAbsolute
} = {}

export const getAbsoluteSize = (
  size: [number, number], cellSize: (number|string)
): FieldSizeAbsolute => {
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

  const result: FieldSizeAbsolute = [width, height]
  
  SIZE_CACHE[id] = result

  return result
}




const getBattlefieldSize = (
  cellSize: (number|string), cells: [number, number]
): { width: string, height: string } => {
  let sizeInt = 0
  let unit = 'px'
  


  let width = cells[0] * sizeInt + unit
  let height = cells[1] * sizeInt + unit
  
  return { width, height }
}