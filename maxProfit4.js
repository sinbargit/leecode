/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    var dp = new Array(prices.length).fill('').map(() => {
        return new Array(k).fill('').map(() => {
            return new Array(2).fill('');
        });
    });
    var i = 1;
    dp[0][0][0] = 0
    dp[0][0][1] = -prices[0]
    while (i < prices.length) {
        var _k = 1;
        while (_k < k) {
            dp[i][_k][0] = Math.max(dp[i-1][_k][0],dp[i-1][_k][1]+prices[i])
            dp[i][_k][1] = Math.max(dp[i-1][_k][1],dp[i-1][_k-1][0]-prices[i])
            _k++
        }
        i++;
    }
    return dp[i-1][k-1][0]
};
console.log(maxProfit(2, [3, 3, 5, 0, 0, 3, 1, 4]));
