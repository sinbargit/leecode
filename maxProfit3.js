/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	var dp=new Array(new Array(new Array()))
	var i = 0;
	if(prices.length == 0) return 0;
	while(i<prices.length){
		dp[i] = dp[i]||[]
		dp[i][1] = dp[i][1]||[]
		dp[i][2] = dp[i][2]||[]
		dp[i][0] = dp[i][0]||[]
		if(i==0){
			dp[i][1][1] = -prices[i]  
			dp[i][1][0] = Number.MIN_SAFE_INTEGER
			dp[i][2][0] = Number.MIN_SAFE_INTEGER
			dp[i][2][1] = Number.MIN_SAFE_INTEGER
			dp[i][0][0] = 0 
			dp[i][0][1] = Number.MIN_SAFE_INTEGER
		}
		else {
			dp[i][1][0] = Math.max(dp[i-1][1][0],dp[i-1][1][1]+prices[i])
			dp[i][1][1] = Math.max(dp[i-1][1][1],-prices[i])
			dp[i][2][0] = Math.max(dp[i-1][2][0],dp[i-1][2][1]+prices[i])
			dp[i][2][1] = Math.max(dp[i-1][2][1],dp[i-1][1][0]-prices[i])
		}
		i++
	}
	return Math.max(dp[i-1][1][0],dp[i-1][2][0],0)
};
console.log(maxProfit([1,2,3,4,5]))
