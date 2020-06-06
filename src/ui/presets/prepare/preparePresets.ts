export const preparePresets = {
  prepare: {
    props: { scale: 1 }
  },
  prepareTitle: {
    props: { text: 'Place your ships on battlefield', size: 'l', weight: 'bold' }
  },
  playerBattlefield: {
    props: { xAxis: true, yAxis: true, outlined: true }
  },
  dock: {
    props: { outlined: true, dashed: true }
  },
  randomizeButton: {
    props: { text: 'Randomize' }
  },
  clearButton: {
    props: { text: 'Clear and place manually' }
  },
}