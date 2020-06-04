import state from '../store'

import { setLayout } from './layout'
import { setCoreField } from './core'

import mainMenuLayout from '../ui/layouts/mainMenuLayout'


export const initGame = () => {
  console.log('🔥 Game initializing… 🔥')
  setLayout(mainMenuLayout)
  setCoreField('isCoreLoaded', true)
}