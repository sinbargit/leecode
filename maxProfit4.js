/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
	var ik0 = ik_10=0;
	var ik1 = ik_11=-prices[0]
	var i = 1
	while(i<prices.length)
	{
		var maxk = k;
		while(maxk>=1)
		{
			ik0 = Math.max(ik0,ik1+prices[i])
			ik1 = Math.max(ik1,ik_10-prices[i])
			ik_10 = Math.max(ik_10,ik_11+price[i])
			ik_11 = Math.max(ik_11,ik_10)
			console.log(ik0,ik1)
			maxk--;
		}
		i++
	}
	return ik0
};
console.log(maxProfit(2,[3,3,5,0,0,3,1,4]))
