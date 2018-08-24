const reverseInt = num =>
  parseFloat(
    num
      .toString()
      .split("")
      .reverse()
      .join("")
  ) * Math.sign(num);

module.exports = reverseInt;
