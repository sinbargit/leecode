/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var arr = [];
    var stack = [];
    while(stack.length||root)
    {
	while(root)
	{
	    stack.push(root);
	    root = root.left;

	}
	root = stack.pop();
	arr.push(root.val)
	root = root.right
    }

    return arr[k-1]
};
