declare module 'baobab-connect'

declare module '*.module.styl' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}