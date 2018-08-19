class Stats {
  constructor(data = []) {
    this.data = data;
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
    let modes = [];
    let maxNum = 0;
    for (let entry of this.data) {
      map[entry] = map[entry] + 1 || 1;
    }
    for (const key in map) {
      const value = parseFloat(key);
      let count = map[key];
      if (count > maxNum) {
        maxNum = value;
        modes = [value];
      } else if (count === maxNum) modes.push(value);
    }
    if (modes.length === Object.keys(map).length) modes = [];
    return modes;
  }
  round(num) {
    return parseFloat(num.toFixed(2));
  }
}

let stat1 = new Stats([1, 2, 3, 4, 4, 5, 5]);
let stat2 = new Stats([1, 1, 2, 2, 3, 3, 4, 4]);
stat1.round(stat1.mean());
stat2.round(stat2.mean());
stat1.median();
stat2.median();
stat1.mode();
stat2.mode();
