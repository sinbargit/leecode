/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
	if(n===1) return true;
	while(n>=3)   
	{
		if(n%3!==0)
		{
			return false;
		}
		else{
			n = n/3;
			if(n===1) return true;
		}
	}
	return false;
};
