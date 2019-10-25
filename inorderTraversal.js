/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
	var arr = [];
	var stack = [];    
	if(!root) return [];
	stack.push(root)
	while(stack.length)
	{
		while(root&&root.left)
		{
			stack.push(root.left)
			root = root.left;
		}
		root = stack.pop();
		arr.push(root);
		root = root.right;
		root&&stack.push(root)
	}
	return arr;
};
