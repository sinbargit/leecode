/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
	var small = null;
	var mid = null;
	for(var num of nums)
	{
		if(small == null)
		{
			small = num
		}

		else if(num <= small)
		{
			small = num
		}
		else if(mid == null)
		{
			mid = num
		}
		else if(num>=small&&num<=mid)
		{
			mid = num
		}
		else if(num>mid) {
			return true
		}

	}
	return false;
};
