export const getTicks = (
  number: number,
  type: string = '',
  startChar: string = 'a'
): string[] => {
  const ticks = []

  const startCharCode = startChar.charCodeAt(0)

  for (let i = 0; i < number; i++) {
    let char = `${i}`
    if (type === 'alphabet') {
      char = String.fromCharCode(startCharCode + i)
    }
    ticks.push(char)
  }

  return ticks
}