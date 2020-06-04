import state from '../store'

const $core = state.select('core')

export const setCoreField = (name: string, value: any) => {
  $core.set(name, value)
}