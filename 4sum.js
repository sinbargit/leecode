


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

function duplicatless(arr)
{
	var obj = {};
	for(var i =0;i<arr.length;i++)
	{
		var key = arr[i].join('');
		obj[key] = arr[i];
	}
	return Object.values(obj)
}

var fourSum = function(nums, target) {
	nums = nums.sort(function(a,b){
		return a>b?1:-1;
	})
	console.log('--',nums)
	var result = [];
	for(i=0;i<nums.length;i++)
	{
		var num4 = nums[i];
		sum3 = target - num4;
		for(j=i+1;j<nums.length;j++)
		{
			var sum2 = sum3-nums[j];
			var l = j+1;
			var h = nums.length-1;
			while(l<h)
			{
				if(nums[l]+nums[h]===sum2)
				{
					result.push([num4,nums[j],nums[l],nums[h]]);	
					l++;
					h--;
				}
				else if(nums[l]+nums[h]<sum2)
				{
					l++;
				}
				else
				{
					h--;
				}
			
			}
		}
	}
	return duplicatless(result);
};
fourSum([1, 0, -1, 0, -2, 2],0)
