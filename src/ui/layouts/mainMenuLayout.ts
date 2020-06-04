import { LAYOUT } from '../../types/layout'

const mainMenuLayout: LAYOUT = [
  {
    type: 'LAYER',
    presets: ['mainMenu'],
    id: 'mainMenu',
    size: [24, 16],
    children: [
      {
        type: 'LAYER',
        position: [2, 1],
        size: [12, 2],
        children: [{
          type: 'TEXT',
          presets: ['warshipsTitle']
        }]
      },
      {
        type: 'LAYER',
        position: [2, 4],
        size: [12, 1],
        children: [{
          type: 'TEXT',
          presets: ['mainMenuTitle']
        }]
      },
      {
        type: 'LAYER',
        position: [2, 6],
        size: [12, 1],
        children: [{
          type: 'BUTTON',
          presets: ['newGameButton']
        }]
      },
      {
        type: 'LAYER',
        position: [2, 7],
        size: [12, 1],
        children: [{
          type: 'BUTTON',
          presets: ['settingsButton']
        }]
      },
      {
        type: 'LAYER',
        position: [2, 8],
        size: [12, 1],
        children: [{
          type: 'BUTTON',
          presets: ['aboutButton']
        }]
      },
      {
        type: 'LAYER',
        position: [2, 12],
        size: [12, 1],
        children: [{
          type: 'TEXT',
          presets: ['copyText']
        }]
      },
    ]
  }
]

export default mainMenuLayout