/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
	if(!root) return true;
	var left = root.left;
	var right = root.right;
	
	if(left)
	{
		if(root.val<=left.val)
		{
			return false;
		}
	}
	if(right)
	{
		if(root.val>=right.val) return false;
	}
	return isValidBST(left)&&isValidBST(right);
};
