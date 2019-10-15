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
var maxDepth = function(root) {
	if(!root) return 0;
	var left = maxDepth(root.left)
	var right = maxDepth(root.right)
	return root?1+(left>=right?left:right):0;	
};
