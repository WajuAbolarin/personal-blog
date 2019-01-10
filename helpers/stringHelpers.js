export const upperFirst = val => {
  let valArray = val.split('')
  valArray[0] = valArray[0].toUpperCase()
  val = valArray.join('')
  return val
}

