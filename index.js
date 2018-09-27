function produceDrivingRange(blockRange) {
  return function (a, b) {
    let range = Math.abs(parseInt(a) - parseInt(b))
    if (range > blockRange) {
      return `${Math.abs(range - blockRange)} blocks out of range`
    } else {
      return `within range by ${Math.abs(range - blockRange)}`
    }
  }
}

function produceTipCalculator(percentage) {
  return function tip(fare) {
    return fare * percentage;
  }
}

function createDriver() {
  let driverId = 0
  class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}