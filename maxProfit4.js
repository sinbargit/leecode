/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    if(k>=prices.length){
        var acc = 0,i=0
        while(i<prices.length-1)
        {
            if(prices[i+1]>prices[i])
            {
                acc +=(prices[i+1]-prices[i])
            }
            i++
        }
        return acc

    }
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
        var _k = k;
        while (_k >= 1) {
            dp[0][_k][0] = 0
            dp[0][_k][1] = -prices[0]
            _k--
        }
        _k = k
        while (_k >= 1) {
            dp[i][_k][0] = Math.max(dp[i-1][_k][0],dp[i-1][_k][1]+prices[i])
            dp[i][_k][1] = Math.max(dp[i-1][_k][1],dp[i-1][_k-1][0]-prices[i])
            _k--
        }
        i++;
    }
    return dp[i-1][k][0]
};
console.log(maxProfit(2, [3, 3, 5, 0, 0, 3, 1, 4]));
