/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	function exchange(arr){
		var index = arr.length-1;
		while(index>0)
		{
			var temp = arr[index] 
			arr[index] = arr[--index]
			arr[index] = temp;
		}
	}
	if(k>nums.length)
	{
		k = k%nums.length
	}
	for(i=0;i<k;i++)
	{
		exchange(nums)	
	}
	console.log(nums)
};
rotate([1,2,3,4,5,6,7],3)
