/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// dfs solution
// var findTargetSumWays = function (nums, S) {
//     let ans = 0;
//
//     function dfs(index, symbol, sum) {
//         sum += (symbol * nums[index]);
//         if (index === nums.length - 1) {
//             if (sum === S) {
//                 ans++;
//             }
//
//         }
//         else {
//             dfs(index + 1, -1, sum);
//             dfs(index + 1, 1, sum);
//         }
//     }
//
//     dfs(0, -1, 0);
//     dfs(0, 1, 0);
//     return ans;
// };
// console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
// 背包解法
var findTargetSumWays = function(nums, S) {
    let j_length = 0
    let sum = 0
    for(let i = 0;i< nums.length;i++)
    {
        sum += nums[i]
    }
    if(S>sum){return 0}
    j_length = sum*2+1
    const dp = new Array(nums.length).fill('').map(()=>{
        return new Array(j_length).fill('')
    })
    for(let i = 0;i<nums.length;i++)
    {
        for(let j=0;j<j_length;j++)
        {
            if(i === 0)
            {
                if(nums[i] === Math.abs(j-sum))
                {
                    dp[i][j] = 1
                    if(nums[i] === 0 && j-sum === 0)
                    {
                        dp[i][j] = 2
                    }
                }
                else {
                    dp[i][j] = 0
                }
            }
            else {
                if(j-sum+nums[i]>sum)
                {
                    dp[i][j] = dp[i-1][j-nums[i]]
                }
                else if(j-sum-nums[i]<-sum)
                {
                    dp[i][j] = dp[i-1][j+nums[i]]
                }
                else {
                    dp[i][j] = dp[i-1][j-nums[i]] + dp[i-1][j+nums[i]]
                }
            }
        }
    }
    console.log(dp)
    return dp[nums.length-1][Math.abs(sum+S)]
};
