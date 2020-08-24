/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (root) {
    let arr = [];
    let dp = [];
    let queues = [root];
    while (queues.length) {
        const node = queues.pop();
        arr.push(node);
        node.left && queues.unshift(node.left);
        node.right && queues.unshift(node.right);
    }
    if (!arr[1]) return arr[0];
    dp[0] = arr[0].val;
    dp[1] = arr[1].val;
    for (let i = 2; i < arr.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i].val);
    }
    return dp[arr.length - 1];
};
