export const prepareLayout = [
  {
    type: 'LAYER',
    presets: ['world', 'isometric', 'prepare'],
    id: 'world',
    size: [26, 20],
    children: [
      {
        type: 'LAYER',
        size: [20, 2],
        position: [2, 1],
        children: [
          {
            type: 'TEXT',
            presets: ['prepareTitle'],
          }
        ]
      },
      {
        type: 'LAYER',
        size: [10, 1],
        position: [2, 3],
        children: [
          {
            type: 'BUTTON',
            id: 'randomizeButton',
            presets: ['randomizeButton']  
          }
        ]
      },
      {
        type: 'LAYER',
        size: [10, 1],
        position: [6, 3],
        children: [
          {
            type: 'BUTTON',
            id: 'clearButton',
            presets: ['clearButton']  
          }
        ]
      },
      {
        type: 'LAYER',
        presets: ['playerBattlefield'],
        id: 'playerBattlefield',
        size: [10, 10],
        position: [2, 6]
      },
      {
        type: 'LAYER',
        presets: ['dock'],
        id: 'dock',
        size: [10, 10],
        position: [14, 6]
      }
    ],
  }
]