/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    var dp = new Array(prices.length).fill('').map(() => {
        return new Array(k + 1).fill('').map(() => {
            return new Array(2).fill('*');
        });
    });
    var i = 1;
    if (dp.length === 0) return 0;
    dp[0][k][0] = 0;
    dp[0][k][1] = -prices[0];
    dp[0][k-1][0] = 0;
    dp[0][k-1][1] = -prices[0];
    while (i < prices.length) {
        var _k = k;
        while (_k >= 1) {
            console.log(dp[i - 1][_k][0],dp[i - 1][_k][1],dp[i - 1][_k][1],dp[i - 1][_k - 1][0])
            dp[i][_k][0] = Math.max(dp[i - 1][_k][0], dp[i - 1][_k][1] + prices[i]);
            dp[i][_k][1] = Math.max(dp[i - 1][_k][1], dp[i - 1][_k - 1][0] - prices[i]);
            _k--;
        }
        i++;
    }
    return dp[i - 1][k][0];
};

console.log(maxProfit(2, [2, 1, 2, 0, 1]));
