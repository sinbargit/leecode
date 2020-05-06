/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	var dp=new Array(new Array(new Array()))
	var i = 0;
	while(i<prices.length){
		if(i==0){
			dp[i][1][1] = -prices[i]  
			dp[i][1][0] = Number.MIN_VALUE
			dp[i][2][0] = Number.MIN_VALUE 
			dp[i][2][1] = Number.MIN_VALUE
			dp[i][0][0] = 0 
			dp[i][0][1] = Number.MIN_VALUE

		}
		else {
			dp[i][1][0] = Math.max(dp[i-1][1][0],dp[i-1][1][1]+price[i])
			dp[i][1][1] = Math.max(dp[i-1][1][1],dp[i-1][0][0]-prices[i])
			dp[i][2][0] = Math.max(dp[i-1][2][0],dp[i-1][2][1]+price[i])
			dp[i][2][1] = Math.max(dp[i-1][2][1].dp[i-1][1][0]-prices[i])
		}
	}
	return Math.max(dp[i][1][0],dp[i][2][0])
};
