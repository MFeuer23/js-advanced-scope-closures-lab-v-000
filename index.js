function produceDrivingRange(blockRange) {
  return function range (a, b) {
    if (Math.abs(a-b) > blockRange) {
      return `${Math.abs(a-b)} blocks out of range`
    } else {
      return `within range by ${Math.abs(a-b)}`
    }
  }
}