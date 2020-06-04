export interface RENDERER {
  [key: string]: any
}

export interface RENDERERS {
  [name: string]: (props: RENDERER) => any
}