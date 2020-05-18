/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let f0 = 0,f1 = Number.MIN_SAFE_INTEGER
    let i = 0;
    while(i<prices.length){
        const temp = f0
        f0 = Math.max(f0,f1+prices[i])
        f1 = Math.max(f1,temp-prices[i]-fee)
        i++
    }
    return Math.max(f0)
};
console.log(maxProfit( [1, 3, 2, 8, 4, 9],2))
