/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    const l = strs.length;
    const dp = new Array(l + 1).fill('').map(() => {
        return new Array(m + 1).fill('').map(() => {
            return new Array(n + 1).fill(0);
        });
    });
    for (let k = 0; k < strs.length + 1; k++) {
        let [_i, _j] = [0, 0];
        if (k != 0) {
            [_i, _j] = getIJ(strs[k-1]);
        }
        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
                if (k === 0) {
                    dp[k][i][j] = 0;
                }
                else if (i < _i || j < _j) {
                    dp[k][i][j] = dp[k - 1][i][j];
                }
                else {
                    dp[k][i][j] = Math.max(dp[k - 1][i][j], dp[k - 1][i - _i][j - _j] + 1);
                }
            }
        }
    }
    return dp[strs.length][m][n];

};

function getIJ(str) {
    return [str.match(/(0)/g) ? str.match(/(0)/g).length : 0, str.match(/(1)/g) ? str.match(/(1)/g).length : 0];
}

console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3));
