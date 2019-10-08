/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	var obj = {};
	for(var i=0;i<nums.length;i++)
	{
		obj[nums[i]] = i;
	}
	if(Object.keys(obj).length!=nums.length)
	{
		return true;
	}
	else{
		return false;
	}
};
