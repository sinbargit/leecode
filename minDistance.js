/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const dp = new Array(word1.length + 1).fill('').map(() => {
        return new Array(word2.length + 1);
    });
    if(dp.length === 0 ) return word2.length
    let i = 0;
    while (i < dp.length) {
        dp[i][0] = i;
        let j = 0;
        while (j < dp[0].length) {
            if (i === 0) {
                dp[0][j] = j;
            }
            else if (j > 0) {
                if(word1.charAt(i-1) === word2.charAt(j-1)){
                    dp[i][j] = dp[i - 1][j - 1];
                }
                else{
                    dp[i][j] =Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i-1][j]) + 1;
                }
            }
            j++;
        }
        i++;
    }
    return dp[word1.length][word2.length]

};
console.log(minDistance('horse','ros'))
