import cm from './Text.module.styl'

import React from 'react'

import cx from 'classnames'

import { TEXT } from './types'
import { getCellSize } from '../../../core/utils/cellSize'


const Text = (props: TEXT) => {
  const {
    children,
    text,
    size,
    weight,
    cellSize,
    style,
    color,
  } = props

  const styles: {[key: string]: any} = {...style}

  if (size) {
    const { int, unit } = getCellSize(cellSize)
    styles.fontSize = `${int * sizeRatio[size]}${unit}`
  }


  return (
    <div
      className={cx({
        [cm.text]: true,
        [cm[weight]]: !!weight,
        [cm[color]]: !!color,
      })}
      style={styles}
    >
      {children || text}
    </div>
  )
}

Text.defaultProps = {
  size: 'm',
  weight: 'medium',
}

export default Text


const sizeRatio: {[key: string]: number} = {
  xxl: 1.75,
  xl: 1.5,
  l: 1.25,
  m: 1,
  s: .75,
  xs: .5,
}