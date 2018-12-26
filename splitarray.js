/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    var low = 0;
    var high = 0;
    for(var i=0;i<nums.length;i++)
    {
    	nums[i]>low&&(low = nums[i])
    	high+=nums[i]
    }
    console.debug(low,'-',high)
    //并非单纯的二元查找，这个是查找最接近的，所以return low
    while(low<=high)
    {
    	var media = parseInt(low+(high-low)/2)
    	check()?low=media+1:high=media-1;
    }
    return low;

    function check()
    {
    	var count = 1;
    	var sum = 0;
    	for(var i=0;i<nums.length;i++)
    	{
    		sum+=nums[i];
    		if(sum>media)
    		{
    			sum = nums[i];
    			if(++count>m)
    			{
    				return true;
    			}
    		}
    	}
    	return false;
    }
};

console.log(splitArray([7,2,5,10,8],2))