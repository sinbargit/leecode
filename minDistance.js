/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const l = Math.max(word2.length,word1.length)
    const dp = new Array(word1.length + 1).fill('').map(() => {
        return new Array(word2.length + 1);
    });
    let i = 0;
    while (i <= dp.length) {
        dp[i][0] = i;
        let j = 0;
        while (j <= dp[0].length) {
            if (i === 0) {
                dp[0][j] = j;
            }
            else if (j > 0) {
                dp[i][j] = dp[i][j-1]===Math.min(dp[i - 1][j - 1], dp[j][j - 1], dp[i][i - 1]) + 1;
            }
            j++;
        }
        i++;
    }
    return dp[word1.length+1][word2.length+1]

};
console.log(minDistance('horse','ros'))
