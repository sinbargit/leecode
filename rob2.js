/**
 *  * @param {number[]} nums
 *   * @return {number}
 *    */
var rob = function(nums) {
    function dp(first){
	var n2 = nums[first];
	var n1 = nums[first+1] 
	var n = 0
	var N = n1
	while(n<nums.length)
	{
	    if(n==first)
	    {
		N = n2	
	    }
	    else if(n==first+1)
	    {
		N = Math.max(n1,n2)
		n1 = N
		n2 = n1
	    }
	    else {
		N = Math.max(n2+nums[n],n1)
		n2 = n1
		n1 = N
	    }
	    n++
	    console.log(N,'--',first)
	}
	return N
    }      

    return Math.max(dp(0),dp(1))
};
rob([2,3,2])
