export const joinClasses = (arr: Array<unknown>): string =>
  arr
    .filter(item => item)
    .join(' ')
    .trim()
