import cm from './assets/styles/common.module.styl'

import * as React from 'react'

import CoreController from './controllers/core'
import ActionController from './controllers/action'
import LayoutController from './controllers/layout'


const App = () => {
  return (
    <div className={cm.game}>
      <CoreController>
        <ActionController>
          <LayoutController>

          </LayoutController>
        </ActionController>
      </CoreController>
    </div>
  )
}

export default App
