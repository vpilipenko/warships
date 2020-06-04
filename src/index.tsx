import './assets/styles/main.styl'

import './setup.ts'

import * as React from 'react'
import { render } from 'react-dom'

import App from './App'

if (module.hot) {
  module.hot.accept()
}

render (
  <App/>,
  document.getElementById('root')
)