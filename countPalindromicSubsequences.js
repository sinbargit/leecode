/**
 * @param {string} S
 * @return {number}
 */
var countPalindromicSubsequences = function (S) {
    function moreThanOne(s, c) {
        let i = 0, j = s.length - 1;
        let target = null;
        while (i < j) {
            if (s[i] === c) {
                if (target !== i) return false;
                target = i;
            }
            if (s[j] === c) {
                if (target !== j) return false;
                target = j;
            }
            i--;
            j++;
        }
        return true;
    }

    const dp = new Array(S.length).fill('').map(() => {
        return new Array(S.length).fill('');
    });
    let j = 0;
    let temp = 0;
    while (temp < S.length) {
        dp[temp][temp] = 1;
        (temp + 1 < S.length) && (dp[temp + 1][temp] = 0);
        temp++;
    }
    console.log(dp)
    while (j < S.length) {
        let i = j-1;
        while (i >= 0) {
            if (S.charAt(i) === S.charAt(j)) {
                let cal = 2;
                let current = S.charAt(j);
                let s = S.substring(i + 1, j);
                if (S.substring(i + 1, j).indexOf(current) === -1) {
                    cal = 2;
                }
                else if (!moreThanOne(s, current)) {
                    cal = 1;
                }
                else {
                    cal = 0;
                }
                dp[i][j] = dp[i + 1][j - 1] * 2 + cal;
            }
            else {
                dp[i][j] = dp[i][j - 1] + dp[i + 1][j] - dp[i + 1][j - 1];
            }
            i--;
        }
        j++;
    }
    console.log(dp)
    return dp[0][S.length - 1];
};
// console.log(countPalindromicSubsequences('bccb'));
console.log(countPalindromicSubsequences('aaa'));
