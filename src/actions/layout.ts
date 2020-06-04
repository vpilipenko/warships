import state from '../store'

export const setLayout = (layout: any) => {
  state.select('layout').set(layout)
}