/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
	const l = nums.length
	let sum = 0
	for(let i = 0;i<l;i++)
	{
		sum += nums[i]
	}
	if(sum%2 !== 0)
	{
		return false
	}
	const half = sum/2
	const dp = new Array(l).fill('').map(()=>{
		return new Array(half+1).fill('')
	})
	for(let i = 0;i<l;i++){
		dp[i][0] = 0
		for(let j = 0;j<=half;j++)
		{
			if(i===0)
			{
				if(nums[0] === j){
					dp[0][j] = true
				}
				else {
					dp[0][j] = false
				}
			}
			else {
				if(dp[i-1][j]||(j>nums[i]&&dp[i-1][j-nums[i]])||nums[i] === j){
					dp[i][j] = true
				}
				else {
					dp[i][j] = false
				}

			}
		}
	}
	console.log(dp)
	return dp[l-1][half]
};
console.log(canPartition( [1, 5, 11, 5]))
