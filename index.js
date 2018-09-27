function produceDrivingRange(blockRange) {
  return function range (a , b) {
    if (Math.abs(a-b) > blockRange) {
      return ""
    }
  }
}