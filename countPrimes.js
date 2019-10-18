/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
	var i = 2;
	var r = new Array(n).fill(true)
	while(i*i<n)
	{
		if(r[i])
		{
			for(var j=i*i;j<n;j+=i)
			{
				r[j] = false;	
			}
		}
		i++;		

	}
	var k = 2;
	var count = 0;
	while(k<n)
	{
		if(r[k])
		{
			count++;	
		}
		k++;
	}
	return count;
};
