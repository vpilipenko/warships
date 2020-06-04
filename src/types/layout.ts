export interface LAYOUT_ITEM {
  type: string
  presets?: string[],
  id?: string,
  size?: [number, number],
  position?: [number, number]
  children?: LAYOUT
}

export type LAYOUT = LAYOUT_ITEM[]