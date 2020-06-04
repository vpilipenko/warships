export interface AVAILABLE_SHIP {
  name: string
  decks: number
  quantity: number 
}

export type AVAILABLE_SHIPS = AVAILABLE_SHIP[]

export interface SETTINGS {
  cellSize: (number | string),
  availableShips: AVAILABLE_SHIPS,
  whitespace: number,
  padding: number,
}