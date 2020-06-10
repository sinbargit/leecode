/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
	const l = coins.length;
	const dp = new Array(l).fill('').map(()=>{
		return new Array(amount+1).fill('')
	})
	for(let i=0;i<l;i++)
	{
		for(let j = 0;j<amount+1;j++)
		{
			if(i === 0)
			{
				if(j === 0)
				{
					dp[i][j] = 0
				}
				else{
					dp[i][j] = j%coins[i] === 0 ? j/coins[i] : -1
				}
			}
			else {
				if(dp[i][j-coins[i]] === -1||j-coins[i]<0)
				{
					dp[i][j] = dp[i-1][j]
				}
				else if(dp[i-1][j] === -1){
					dp[i][j] = dp[i][j-coins[i]]+1
				}
				else {
					dp[i][j] = Math.min(dp[i-1][j],dp[i][j-coins[i]]+1)
				}
			}
		}
	}
	console.log(dp)
	return dp[l-1][amount]
};
console.log(coinChange([1, 2, 5],11))
