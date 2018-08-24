/**
 * An obvious solution is to use a double nested for loops
but this gives an O(n^2) complexity, 
which we want to avoid at all costs

const maxProfit = prices => {
  let maxProfit = 0;
  let pair = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let difference = prices[j] - prices[i];
      if (difference < 0) {
        difference = prices[i] - prices[j];
      }
      if (difference > maxProfit) {
        maxProfit = difference;
        pair = [prices[i], prices[j]];
      }
    }
  }
  return pair;
};
 */
// [1,2,3,4,5,6]

const maxProfit = prices => {
  let minBuyPrice = prices[0],
    maxSellPrice = prices[1];
  let maxProfit = maxSellPrice - minBuyPrice;
  let changeBuyPrice = false;

  prices.forEach((price, index) => {
    if (changeBuyPrice) minBuyPrice = price;
    const sellPrice = prices[index + 1];

    if (minBuyPrice > sellPrice) changeBuyPrice = true;
    else {
      changeBuyPrice = false;
      const profit = sellPrice - minBuyPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
        maxSellPrice = sellPrice;
      }
    }
  });

  return [minBuyPrice, maxSellPrice];
};

module.exports = maxProfit;
