/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
	const temp = new Array(nums.length+2).fill('')
	for(let i = 0;i<temp.length;i++)
	{
		if(i !== 0 && i!==temp.length-1)	
		{
			temp[i] = nums[i-1]
		}
		else {
			temp[i] = 1
		}
	}
	nums = temp
	let l = nums.length	
	const dp = new Array(l).fill('').map(()=>{
		return new Array(l).fill('')
	})
	
	for(let i = 0;i<l-1;i++)
	{
		dp[i][i+1] = 0 
	}
	for(let i = l-1;i>=0;i--)
	{
		for(let j = i+2;j<l;j++)
		{
			let temp = 0
			for(let k = i+1;k<j;k++)
			{
				temp = Math.max(dp[i][k]+nums[i]*nums[j]*nums[k]+dp[k][j],temp)
			}
			dp[i][j] = temp
		}
	}
	return dp[0][l-1]
};
console.log(maxCoins([3,1,5,8]))
