/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
	this.nums = nums;  
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
	return   this.nums ;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
	var _nums = JSON.parse(JSON.stringify(this.nums));
	for(var i=0;i<_nums.length;i++)
	{
		var random = parseInt(_nums.length*Math.random());
		var temp = _nums[random];
		_nums[random] = _nums[i];
		_nums[i] = temp;
	}
	return _nums;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
