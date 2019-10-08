/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	var value = 0;
	for(var i=0,j=1;j<prices.length;i++,j++)
	{
		if(prices[i+1]>prices[i])
		{
			value += prices[i+1]-prices[i];
		}
	}
	return value;
};
