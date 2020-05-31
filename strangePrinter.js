/**
 * @param {string} s
 * @return {number}
 */
/**
 *    abncajdasda
 *
 */

var strangePrinter = function(s) {
    if(s.length === 0) return 0
    const l = s.length
    const dp = new Array(l).fill('').map(()=>{
        return new Array(l).fill('')
    })
    for(let i =0 ;i<l;i++){
        dp[i][i] = 1
    }
    for(let i = l-1;i>=0;i--)
    {
        for(let j = i+1;j<l;j++)
        {
            dp[i][j] = j-i+1
            for(let k = i;k<j;k++)
            {
                if(s[k] === s[j])
                {
                    dp[i][j] = Math.min(dp[i][k]+dp[k+1][j]-1,dp[i][j])
                }
                else {
                    dp[i][j] = Math.min(dp[i][k]+dp[k+1][j],dp[i][j])
                }
            }
        }
    }
    console.log(dp)
    return dp[0][l-1]
};
console.log(strangePrinter('aaabbb'))
console.log(strangePrinter('aba'))
