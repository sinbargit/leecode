/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
	var temp = x^y;
	var count = 0;
	while(temp!==0)
	{
		temp &= temp - 1;
		count++
	}
	return count;
};
