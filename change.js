/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    const l = coins.length;
    const dp = new Array(l).fill('').map(() => {
        return new Array(amount + 1).fill(0);
    });

    if(l === 0){
        return amount === 0
    }

    for (let i = 0; i < l; i++) {
        for (let j = 0; j < amount + 1; j++) {
            if (i === 0) {
                if (j % coins[i] === 0) {
                    dp[i][j] = 1;
                }
            }
            else {
                if (j >= coins[i]) {
                    dp[i][j] = dp[i][j - coins[i]] + dp[i - 1][j];
                }
                else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }
    }
    console.log(dp);
    return dp[l - 1][amount];
};
console.log(change(5, [1, 2, 5]));
