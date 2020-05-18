/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	if(nums.length===1) return nums[0];
	function inner(nums,first){
		var N = n1 = n2 = 0;
		var i = 0;
		var l = nums.length;
		if(first){
			l = l-1
		}
		else {
			i = i+1
		}
		while(i<l)
		{
			N = Math.max(n2+nums[i],n1)
			n2 = n1
			n1 = N
			i++
		}
		console.log(N)
		return N
	}
	return Math.max(inner(nums,true),inner(nums,false))
};
console.log(rob([2,3,2]))
