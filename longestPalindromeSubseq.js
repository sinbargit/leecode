/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    const dp = new Array(s.length).fill('').map(() => {
        return new Array(s.length).fill('');
    });
    let temp = 0
    while(temp<dp.length)
    {
        dp[temp][temp] = 1
        if(temp-1>=0)
        {
            dp[temp][temp-1] = 0
        }
        temp++
    }
    console.log(dp)
    let j = 1;
    while (j < s.length) {
        let i = 0;
       while (i <= j) {
            dp[i][j] = s.charAt(i) === s.charAt(j) ? dp[i + 1][j - 1] : Math.max(dp[i][j - 1], dp[i - 1][j]);
            i++;
        }
        j++;
    }
    return dp[0][j--];
};
console.log(longestPalindromeSubseq('cbbd'));
