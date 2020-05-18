var maxProfit = function (prices) {
    const dp = new Array(prices.length).fill('').map(() => {
        return new Array(2).fill('');
    });
    if(dp.length===0)return 0;
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    let i = 1;
    while (i < prices.length) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        if (i - 2 < 0) {
            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
        }
        else {
            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
        }
        i++
    }
    return dp[i-1][0]

};
console.log(maxProfit([2,1,4]));
