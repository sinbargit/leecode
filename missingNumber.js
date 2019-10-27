/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

    var t = nums.length;
    for(var i=0;i<nums.length;i++)
    {
	t ^= i^nums[i]	
    }
    return t;
};
