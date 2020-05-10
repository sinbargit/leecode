var maxProfit = function (prices) {
    var dp = new Array(prices.length).fill('').map(() => {
        return new Array(k+1).fill('').map(() => {
            return new Array(2).fill('');
        });
    });
    if(dp.length === 0){return 0}
    var i = 1;
    while (i < prices.length) {
        dp[i][0][0] = 0
        dp[i][0][1] = Number.MAX_SAFE_INTEGER
        var _k = parseInt(prices.length/2);
        while (_k >= 1) {
            dp[0][_k][0] = 0
            dp[0][_k][1] = -prices[0]
            _k--
        }
        _k = k
        while (_k >= 1) {
            dp[i][_k][0] = Math.max(dp[i-2][_k][0],dp[i-2][_k][1]+prices[i])
            dp[i][_k][1] = Math.max(dp[i-2][_k][1],dp[i-2][_k-1][0]-prices[i])
            _k--
        }
        i++;
    }
    return dp[i-1][k][0]
};
console.log(maxProfit([1,2,3,0,2] ));
