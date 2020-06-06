import React, { Component } from 'react'

import connect from 'baobab-connect'

import { SETTINGS } from '../../types/settings'

import LayoutRenderer from '../../components/LayoutRenderer'

import rendererTypes from '../../ui/rendererTypes'
import renderers from '../../ui/renderers'
import presets from '../../ui/presets'


interface PROP_TYPES {
  layout?: any
  settings?: SETTINGS
}


@connect({
  layout: 'layout',
  settings: 'settings'
})
class LayoutController extends Component<PROP_TYPES> {
  render() {
    const { 
      layout,
      settings
    } = this.props

    return (
      <LayoutRenderer
        layout={layout}
        rendererTypes={rendererTypes}
        renderers={renderers}
        presets={presets}
        settings={settings}
      />
    )
  }
}

export default LayoutController
