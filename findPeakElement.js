/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
	var i = 0;j = nums.length-1;	
	function binarySearch(nums,i,j){
		if(i>j)
		{
			return null;
		}
		var mid = parseInt((i+j)/2);
		if((mid+1>=nums.length||nums[mid]>nums[mid+1])&&(nums[mid-1]<nums[mid]||mid-1<0)){
			return mid;
		}
		else if(nums[mid]>nums[mid+1]||mid+1>=nums.length)
		{
			return binarySearch(nums,i,mid)
		}
		else if(nums[mid]<nums[mid+1])
		{
			return binarySearch(nums,mid+1,j)	
		}

	}		    
	return binarySearch(nums,i,j)
};
