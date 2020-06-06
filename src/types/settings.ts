import { AVAILABLE_SHIPS } from './ships'

export interface SETTINGS {
  cellSize: (number | string),
  availableShips: AVAILABLE_SHIPS,
  whitespaceRatio: number,
}