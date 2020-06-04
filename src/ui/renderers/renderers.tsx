import React from 'react'

import Layer from '../../components/common/Layer'
import Text from '../../components/common/Text'
import Button from '../../components/common/Button'

import { RENDERERS } from '../../types/renderers'


const renders: RENDERERS = {

  LAYER: ({ field, preset, children, settings, ...other }) => {
    const { position, size } = field
    return (
      <Layer
        position={position}
        size={size}
        cellSize={settings.cellSize}
        children={children}
        {...preset.props}
      />
    )
  },

  TEXT: ({ field, preset, children, settings, ...other }) => {
    return (
      <Text
        {...preset.props}
        cellSize={settings.cellSize}
      />
    )
  },

  BUTTON: ({ field, preset, children, settings, ...other }) => {
    const { text } = preset.props
    return (
      <Button
        {...preset.props}
        cellSize={settings.cellSize}
      >
        {text}
      </Button>
    )
  },

}

export default renders