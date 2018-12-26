var twoSum = function(nums, target) {
	const obj = {}
	for(var i=0;i <nums.length;i++)
	{
		if(!isNaN(obj[nums[i]]))
		{
			return [obj[nums[i]],i]
		}
		else
		{
			obj[target-nums[i]]=i
		}
	}
	return false
};
console.log(twoSum( [2,7,11,15],9))