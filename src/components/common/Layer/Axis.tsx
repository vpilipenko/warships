import React from 'react'

import cm from './Axis.module.styl'

import { getTicks } from '../../../utils/ticks'
import { getCellSize } from '../../../utils/cellSize'


type PROPS = {
  size: number,
  type?: string,
  orientation?: string,
  cellSize: (string|number)
}

const Axis = (
  props: PROPS
): JSX.Element => {
  const {
    size,
    type,
    orientation,
    cellSize,
  } = props

  
  const ticks = getTicks(size, type)
  
  const v = orientation && orientation === 'v'

  const { int, unit } = getCellSize(cellSize)

  return (
    <div
      className={cm.axis}
      style={{
        fontSize: `${+int / 2}${unit}`,
        height: v ? '100%' : cellSize,
        width: v ? cellSize : '100%',
        top: v ? 0 : `-${cellSize}`,
        left: v ? `-${cellSize}` : 0,
      }}
    >
      {ticks.map((tick, index) => (
        <span
          style={{ width: cellSize, height: cellSize }}
          key={`${tick}_${index}`}
        >
          {tick}
        </span>
      ))}
    </div>
  )
}

export default Axis