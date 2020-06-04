const deployLayout = [
  {
    type: 'LAYER',
    preset: 'world',
    id: 'world',
    position: [0, 0],
    size: [100, 100],
    children: [
      {
        type: 'LAYER',
        position: [0, 0],
        size: [100, 100],
        children: {
          type: 'TEXT',
          preset: ['heading', 'deployTitle']
        }
      },
      // ... other ui els
      {
        type: 'LAYER',
        preset: 'playerBattlefield',
        id: 'playerBattlefield',
        position: [0, 0],
        size: [100, 100],
        children: [
          // ships
          {
            type: 'LAYER',
            id: '0_fourDeck',
            position: [0, 0],
            size: [0, 3],
            children: [
              {
                type: 'SHIP',
                preset: ['fourDeck', 'shipOnFire'],
              }
            ]
          },
          // marks
          {
            type: 'layer',
            position: [0, 0],
            size: [1, 1],
            children: 'miss'
          },
        ]
      },
      {
        type: 'dock',
        position: [0, 0],
        size: [100, 100],
      },
      {
        type: 'enemy_battlefield',
        position: [0, 0],
        size: [100, 100],
        children: [
          // marks
          {
            type: '0_hit',
            position: [0, 0],
            size: [1, 1],
          },
          {
            type: '0_dashed',
            position: [0, 0],
            size: [1, 1],
          },
        ]
      }
    ]
  }
]