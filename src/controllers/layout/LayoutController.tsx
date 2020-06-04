import React, { Component } from 'react'

import connect from 'baobab-connect'

import { SETTINGS } from '../../types/settings'

// import LayoutRenderer from '../../components/LayoutRenderer'


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

    return <div>123</div>

    // return (
    //   <LayoutRenderer
    //     layout={layout}
    //     settings={settings}
    //   />
    // )
  }
}

export default LayoutController
