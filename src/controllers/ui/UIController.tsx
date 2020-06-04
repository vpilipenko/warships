import React, { Component } from 'react'

import { UI } from '../../core/types/ui'
import { Settings } from '../../core/types/settings'
import { SQUADRON } from '../../core/types/squadron'

import connect from 'baobab-connect'

import { initDeploy } from '../../core/actions/deploy'

import Field from '../../components/common/Field'
import Rotater from '../../components/common/Rotater'
import Sheet from '../../components/common/Sheet'
import Deploy from '../../components/single/Deploy'



type UI_PROPS = {
  settings?: Settings,
  ui?: UI,
  step?: string,
  squadron?: SQUADRON,
}

@connect({
  settings: 'settings',
  ui: 'ui',
  step: 'step',
  squadron: 'squadron',
})
class UIController extends Component<UI_PROPS> {

  componentDidMount() {
    const { step } = this.props
    if (step === 'deploy') {
      initDeploy()
    }
  }


  render() {
    const { ui, settings, squadron } = this.props

    return (
      <div style={{
        fontSize: settings.cellSize,
        lineHeight: settings.cellSize,
      }}>
        <Rotater>
          <Field position={ui.sheet.position} size={ui.sheet.size}>
            <Sheet>
              <Deploy ui={ui} squadron={squadron} />
            </Sheet>
          </Field>
        </Rotater>
      </div>
    )
  }
}

export default UIController
