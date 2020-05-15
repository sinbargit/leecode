/**
 * @param {string} S
 * @return {number}
 */
var countPalindromicSubsequences = function (S) {
    const mod = 1000000007;

    function moreThanOne(s, c) {
        let i = 0, j = s.length - 1;
        let left = null, right = null;
        while ((i < s.length || j >= 0) && (right === null || left === null)) {
            if (s[i] === c) {
                left === null && (left = i);
            }
            if (s[j] === c) {
                right === null && (right = j);
            }
            i++;
            j--;
        }
        // console.log([left, right]);
        return [left, right];

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
    // console.log(dp)
    while (j < S.length) {
        let i = j - 1;
        while (i >= 0) {
            if (S.charAt(i) === S.charAt(j)) {
                let cal = 2;
                let current = S.charAt(j);
                let s = S.substring(i + 1, j);
                if (s.indexOf(current) === -1) {
                    cal = 2;
                }
                else {
                    const r = moreThanOne(s, current);
                    if (r[0] === r[1]) {
                        cal = 1;
                    }
                    else {
                        cal = -dp[i + 1 + r[0] + 1][i + 1 + r[1] - 1];
                    }
                }
                const temp = dp[i + 1][j - 1] * 2 + cal;
                dp[i][j] = temp < 0 ? mod + temp : temp % mod;
            }
            else {
                const temp = dp[i][j - 1] + dp[i + 1][j] - dp[i + 1][j - 1];
                dp[i][j] = temp < 0 ? (mod + temp) : (temp % mod);
            }
            i--;
        }
        j++;
    }
    // console.log(dp.join('\n'));
    return dp[0][S.length - 1] % 1000000007;
};
//console.log(countPalindromicSubsequences('aaaa'));
// console.log(countPalindromicSubsequences('bccb'));
// console.log(countPalindromicSubsequences('aaa'));
// console.log(countPalindromicSubsequences('abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba'));
// console.log(countPalindromicSubsequences('dbcbaaacdcbabcbddaac'));
// console.log(countPalindromicSubsequences('baaddaaabaddccbbbdcbcccbdbdabdabdbadabddbbcbbcabbccdaccdbcbbcdcdbaadbcadacabcaaaadbcaddbbacddcdabaadcacacdcabaadacadcccdcbbcdabdcdacaacdcdbdacbdbcdcbaddaccabaaaabcadacdaddbcccbcdbadbdddaaabbdbdbcbcdab'));
// console.log(countPalindromicSubsequences('bddaabdbbccdcdcbbdbddccbaaccabbcacbadbdadbccddccdbdbdbdabdbddcccadddaaddbcbcbabdcaccaacabdbdaccbaacc'));
console.log(countPalindromicSubsequences('baaddaaabaddccbbbdcbcccbdbdabdabdbadabddbbcbbcabbccdaccdbcbbcdcdbaadbcadacabcaaaadbcaddbbacddcdabaadcacacdcabaadacadcccdcbbcdabdcdacaacdcdbdacbdbcdcbaddaccabaaaabcadacdaddbcccbcdbadbdddaaabbdbdbcbcdab'));
