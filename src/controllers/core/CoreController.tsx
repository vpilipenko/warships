import React, { Component } from 'react'

import connect from 'baobab-connect'

import { CORE } from '../../types/core'

// import { initGame } from '../../core/actions/initGame'


interface PROP_TYPES {
  core?: CORE
}


@connect({
  core: 'core',
})
class CoreController extends Component<PROP_TYPES> {

  componentDidMount() {
    // initGame()
  }

  componentDidUpdate(prevProps: PROP_TYPES) {
    const curStep = this.props.core.step
    const oldStep = prevProps.core.step

    if (curStep !== oldStep) {
      // Changing game step here
    }
  }


  render() {
    const { core } = this.props

    const  { isCoreLoaded } = core

    if (!isCoreLoaded) {
      return <div>Game initializing…</div>
    }

    const { children } = this.props
    
    return children
  }
}

export default CoreController
