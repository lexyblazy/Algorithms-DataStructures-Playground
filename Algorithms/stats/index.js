class Stats {
  constructor(data = []) {
    this.data = data;
  }

  static round(num) {
    return parseFloat(num.toFixed(2));
  }

  mean() {
    return this.data.reduce((acc, next) => acc + next, 0) / this.data.length;
  }
  median() {
    const sorted = this.data.sort();
    const midpoint = (sorted.length - 1) / 2;
    if (sorted[midpoint]) {
      return sorted[midpoint];
    }
    const halfway = sorted[sorted.length / 2];
    const index = sorted.indexOf(halfway);
    const median = (sorted[index] + sorted[index - 1]) / 2;
    return median;
  }
  mode() {
    const map = {};
    this.data.forEach(el => {
      map[el] = map[el] + 1 || 1;
    });
    let modes = [];
    let maxCount = 0;
    /*
      this.data  = [1,1,2,2,3,4,4,5,5]
      map = {
        '1': 2,
        '2': 2,
        '3': 1,
        '4': 2,
        '5': 2
      }
    */
    for (let key in map) {
      const value = parseFloat(key);
      const valueCount = map[key];
      if (valueCount > maxCount) {
        maxCount = valueCount;
        modes = [value];
      } else if (valueCount === maxCount) modes.push(value);
    }
    // if all numbers are in the mode array
    if(modes.length === Object.keys(map).length) modes = [];
    return modes;
  }
}

module.exports = Stats;
