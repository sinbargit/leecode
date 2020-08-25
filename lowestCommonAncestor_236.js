/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    function deep(node) {
        if (node === null || node.val === p.val || node.val === q.val) {
            return node;
        }
        const left = deep(node.left);
        const right = deep(node.right);
        if (left !== null && right !== null) {
            return node;
        }
        else {
            return left || right;
        }
    }

    return deep(root);
};
