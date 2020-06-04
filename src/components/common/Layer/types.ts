import { SIZE, POSITION } from '../../../types/common'
import { SETTINGS } from '../../../types/settings'

export interface LAYER  {
  id?: string
  size: SIZE
  position: POSITION
  cellSize: string
  grid?: boolean
  rotate?: [number, number, number]
  scale?: (number|string)
  children?: any
  outlined?: boolean
  dashed?: boolean
  xAxis?: boolean
  yAxis?: boolean
}