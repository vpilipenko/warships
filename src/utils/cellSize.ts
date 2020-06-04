type cellSize = {
  int: number,
  unit: string
}

export const getCellSize = (
  value: (string|number)
): cellSize => {
  let int = 0
  let unit = 'px'

  if (typeof value === 'string') {
    unit = value.match(/[a-zA-z]+$/).pop()
    int = +value.replace(unit, '')
  } else {
    int = value
  }

  return { int, unit }
}