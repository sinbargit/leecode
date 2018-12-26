/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
	nums = nums.sort(function(a,b){
		if(a>b)
		{
			return 1;
		}
		else{
			return -1;
		}
	});
	var arr = {}
	var deviate = null;
	for(var i=0;i<nums.length-2;i++)
	{
		var twoSum = target-nums[i];
		var low = i+1;
	    var high = nums.length-1;
	    while(low<high)
	    {
	    	var sum = nums[low]+nums[high];
		    if(deviate!==null)
		    {
		    	deviate = Math.abs(twoSum - sum)>Math.abs(deviate-target)?deviate:(sum + nums[i])
		    }
		    else
		    {
		    	deviate = (sum + nums[i])
		    }
	    	if(sum>twoSum)
	    	{
	    		high--;
	    	}
	    	else if(sum<twoSum)
	    	{
	    		low++;
	    	}
	    	else
	    	{
	    		return target
	    	}
	    }
	}
	return deviate;
};
console.log(threeSumClosest([1,2,5,10,11],12))