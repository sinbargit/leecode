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

function findTargetSumWays(nums, S)
{
    let sum = S + nums.length;
    const dp = new Array(nums.length).fill('').map(() => {
        return new Array(sum * 2 + 1).fill('');
    });
    for (let i = 0; i < nums.length; i++) {
        for (let j = -sum; j <= sum; j++) {
            if (i === 0) {
                dp[i][j] = nums[i] === Math.abs(j) ? 1 : 0;
                if (nums[i] === 0 && j === 0) {
                    dp[i][j] = 2;
                }
            }
            else {
                if (j - nums[i] < -sum) {
                    dp[i][j] = dp[i - 1][j + nums[i]];
                }
                else if (j + nums[i] > sum) {
                    dp[i][j] = dp[i - 1][j - nums[i]];
                }
                else {
                    dp[i][j] = dp[i - 1][j - nums[i]] + dp[i - 1][j + nums[i]];
                }
            }
        }
    }
    console.log(dp)
    return dp[nums.length-1][sum*2]
}
console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
