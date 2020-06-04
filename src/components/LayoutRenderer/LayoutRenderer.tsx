import React, { Fragment } from 'react'

import { LAYOUT } from '../../types/layout'
import { RENDERER_TYPES } from '../../types/rendererTypes'
import { RENDERERS } from '../../types/renderers'
import { SETTINGS } from '../../types/settings'
import { PRESETS, PRESET } from '../../types/presets'


interface PROPS {
  layout: LAYOUT
  rendererTypes: RENDERER_TYPES
  renderers: RENDERERS
  presets: PRESETS
  settings: SETTINGS
}

const LayoutRenderer = (props: PROPS): any => {
  const {
    layout,
    rendererTypes,
    renderers,
    presets,
    settings,
  } = props

  return (
    layout
      .map((field: any, index: any) => {
        if (Array.isArray(field)) {
          return (
            <LayoutRenderer
              layout={field}
              rendererTypes={rendererTypes}
              renderers={renderers}
              presets={presets}
              settings={settings}
              key={index}
            />
          )
        }

        if (!renderers[field.type]) {
          return <div key={index}>{`No render for: ${field.type}`}</div>
        }

        let preset: PRESET = {}
        if (field.presets) {
          preset = field.presets.reduce((acc: any, preset: string) => {
            return Object.assign(acc, presets[preset])
          }, {})
        }

        let children = null
        if (field.children) {
          children = <LayoutRenderer
            layout={field.children}
            rendererTypes={rendererTypes}
            renderers={renderers}
            presets={presets}
            settings={settings}
            key={index}
          />
        }

        return (
          <Fragment key={index}>
            {renderers[field.type]({ field, rendererTypes, renderers, preset, settings, children })}
          </Fragment>
        )
      })
  )
}

export default LayoutRenderer
