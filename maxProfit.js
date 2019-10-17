/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	var lower = null;
	var upper = null;
	var max = 0;
	for(var i=0;i<prices.length;i++)
	{
		if(lower===null)
		{
			lower = prices[0];
		}
		else{
			if(prices[i]<lower)
			{
				lower = prices[i]
			}
		}
		prices[i] - lower > max ? max=prices[i] - lower:''; 
	}
	return max;
};
