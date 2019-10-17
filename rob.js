/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	var n1 = n2 =0;
	var nn = 0;
	var i =0;
	while(i<nums.length)
	{
		n1 = nn;
		nn = Math.max(n2+nums[i], n1)	
		n2 = n1;
		i++;
	}
	return nn;
};
