/**
 * @param {number[]} nums
 * @return {boolean}
 */
//DP 写法
//状态转移方程：f(N) = max(f(N-1),nums[i-1])-1
var canJump = function(nums) {
	var dp = [nums[0]]; 
	for(var i=1;i<nums.length;i++)
	{
		dp[i] = Math.max(nums[i-1],dp[i-1]) - 1;
		if(dp[i]<0) return false
	}
	return true;
};


//贪心算法
var canJump = function(nums){
	var k = 0;
	for(var i=1;i<nums.length;i++)
	{
		k += Math.max(k-1,nums[i])	
	}
}
