/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	var temp = 0;
	nums.forEach(function(i){
		temp ^= i;
	})
	return temp; 
};
