import { SIZE, MATRIX, COORDINATE, SLICE } from '../types/common'


export const createMatrix = (size: SIZE): MATRIX => {
  return Array(size[1]).fill(Array(size[0]).fill(0))
}


export const cropMatrix = (
  matrix: MATRIX,
  s1: SLICE,
  s2: SLICE
): MATRIX => {
  const yMin = 0
  const yMax = matrix.length
  const xMin = 0
  const xMax = matrix[0].length

  const y1 = s1[0]
  const y2 = s1[1]
  const x1 = s2[0]
  const x2 = s2[1]

  return matrix
    .slice(
      y1 < yMin ? yMin : y1,
      y2 > yMax ? yMax : y2
    )
    .map(arr => arr.slice(
      x1 < xMin ? xMin : x1,
      x2 > xMax ? xMax : x2
    ))
}


export const getSiblings = (
  matrix: MATRIX,
  A: COORDINATE,
  B?: COORDINATE
): MATRIX => {
  const Ax = A[0]
  const Ay = A[1]

  // slice 1
  let s1: SLICE = [Ay - 1, Ay + 2]
  // slice 2
  let s2: SLICE = [Ax - 1, Ax + 2]

  if (B) {
    const Bx = B[0]
    const By = B[1]
    s1 = Ay > By ? [By - 1, Ay + 2] : [Ay - 1, By + 2]
    s2 = Ax > Bx ? [Bx - 1, Ax + 2] : [Ax - 1, Bx + 2]
  }

  return cropMatrix(matrix, s1, s2)
}