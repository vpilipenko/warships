import cm from './Layer.module.styl'

import React from 'react'

import cx from 'classnames'

import { LAYER } from './types'

import { getAbsolutePosition } from '../../../core/utils/position'
import { getAbsoluteSize } from '../../../core/utils/size'

import Axis from './Axis'


const Layer = (props: LAYER) => {
  const {
    children,
    id,
    size,
    position,
    cellSize,
    rotate,
    scale,
    grid,
    outlined,
    dashed,
    xAxis,
    yAxis,
  } = props

  const styles: {[key: string]: any} = {
    backgroundSize: `${cellSize} ${cellSize}`,
  }

  if (!!position) {
    const absolutePosition = getAbsolutePosition(position, cellSize)
    styles.left = absolutePosition[0]
    styles.top = absolutePosition[1]
  }
  if (!!size) {
    const absoluteSize = getAbsoluteSize(size, cellSize)
    styles.width = absoluteSize[0]
    styles.height = absoluteSize[1]
  }
  if (!!rotate) {
    styles.transform = `rotateX(${rotate[0]}deg) rotateY(${rotate[1]}deg) rotateZ(${rotate[2]}deg)`
  }
  if (!!scale) {
    styles.transform = `${styles.transform} scale(${scale})`
  }


  return (
    <div
      id={id}
      className={cx({
        [cm.layer]: true,
        [cm.grid]: grid,
        [cm.outlined]: outlined,
        [cm.dashed]: dashed,
      })}
      style={styles}
    >
      {xAxis ? <Axis size={size[0]} cellSize={cellSize} /> : null}
      {yAxis ? <Axis size={size[1]} cellSize={cellSize} type='alphabet' orientation='v' /> : null}
      {children}
    </div>
  )
}

export default Layer