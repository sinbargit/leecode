/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
	var l = 0,cur = 0;
	var h = nums.length-1;
	while(cur<=h)
	{
		if(nums[cur]==2)
		{
			var temp = nums[h];
			nums[h]=2;	
			nums[cur]=temp;
			h--;
		}
		else if(nums[cur]==0)
		{
			var temp = nums[l]
			nums[l++] = 0;
			nums[cur++] = temp
		}
		else{
			cur++;
		}
	}
};
console.log(sortColors([2,0,2,1,1,0]))
