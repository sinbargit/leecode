/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let max = 0;

    function deep(root) {
        if (root) {
            let left = deep(root.left);
            let right = deep(root.right);
            max = left + right;
            return Math.max(left, right) + 1;
        }
        else {
            return 0;
        }
    }
    deep(root)
    return max;
};
