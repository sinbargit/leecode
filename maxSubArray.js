/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	var max = nums[0];
	var now = 0;
	for(var i=0;i<nums.length;i++)
	{
		if(now>0)
		{
			now += nums[i]		
		}
		else {
			now = nums[i]
		}
		max < now?max = now:''
	}
	return max;
};
