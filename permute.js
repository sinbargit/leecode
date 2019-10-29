/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function(nums) {
	arr = [];
	function backtrack(nums,start){
		if(start==nums.length-1)
		{
			arr.push(JSON.parse(JSON.stringify(nums)))
		}

		for(var i=start;i<nums.length;i++)
		{

			swap(nums,start,i)			
			backtrack(nums,start+1)
			swap(nums,start,i)
		}	
	}
	backtrack(nums,0)
	function swap(nums,i,j)
	{
		var temp = nums[i]
		nums[i] = nums[j]
		nums[j] = temp;
	}
	console.log(arr)
	return arr;

};
permute([1,2,3])
