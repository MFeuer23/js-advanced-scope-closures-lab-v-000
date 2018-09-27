function produceDrivingRange(blockRange) {
  return function range (a, b) {
    let num = Math.abs(parseInt(a) - parseInt(b))
    if (num > blockRange) {
      return `${Math.abs(num - blockRange)} blocks out of range`
    } else {
      return `within range by ${Math.abs(num - blockRange)}`
    }
  }
}