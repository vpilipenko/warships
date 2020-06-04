import cm from './Button.module.styl'

import React from 'react'

import cx from 'classnames'

import { BUTTON, STYLES } from './types'

import { getCellSize } from '../../../core/utils/cellSize'


const Button = (props: BUTTON) => {
  const {
    children,
    text,
    cellSize,
    style,
    ...other
  } = props

  const styles: STYLES = {...style}

  const { int, unit } = getCellSize(cellSize)
  styles.fontSize = `${int/1.75}${unit}`
  styles.lineHeight = cellSize

  return (
    <button
      className={cx({
        [cm.button]: true,
      })}
      style={styles}
      type='button'
      {...other}
    >
      {children || text}
    </button>
  )
}

export default Button
