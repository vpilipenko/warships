import React from 'react'

import Layer from '../../components/common/Layer'
import Text from '../../components/common/Text'
import Button from '../../components/common/Button'

import { RENDERERS } from '../../types/renderers'


const renders: RENDERERS = {

  LAYER: ({ renderers, rendererTypes, preset, field, children, settings, ...other }) => {
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

  TEXT: ({ renderers, rendererTypes, preset, field, children, settings, ...other }) => {
    return (
      <Text
        {...preset.props}
        cellSize={settings.cellSize}
      />
    )
  },

  BUTTON: ({ renderers, rendererTypes, preset, field, children, settings, ...other }) => {
    return (
      <Button
        id={field.id}
        {...preset.props}
        cellSize={settings.cellSize}
      />
    )
  },

}

export default renders