/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
	var arr = [-1,-1]
	function bs(nums,l,h){
		if(l>h){
			return			
		}
		var mid = parseInt((l+h)/2);
		if(nums[mid] === target)
		{
			console.log('hint',arr)
			if(arr[0]==-1&&arr[1]==-1)
			{
				arr[0] = mid;	
				arr[1] = mid		
			}
			else 
			{
				if(mid<arr[0])
				{
					arr[0] = mid
				}
				if(mid>arr[0]&&mid>arr[1])
				{
					arr[1] = mid
				}
			}
		}
		bs(nums,l,mid-1)
		bs(nums,mid+1,h)
	}   
	bs(nums,0,nums.length-1)
	return arr;
};
console.log(searchRange([5,7,7,8,8,10],8))
