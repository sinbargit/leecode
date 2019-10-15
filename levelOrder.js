/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	var queue = [];
	if(!root) return root;
	queue.unshift(root);
	var r = [];
	var l = [];
	while(queue.length>0)
	{
		var q = queue.length	
		for(var i = 0;i<q;i++)
		{
			var node = queue.pop()	
			l.push(node.val)
			node.left&&queue.push(node.left)
			node.rigth&&queue.push(node.right)
		}
		r.push(l);
		l = [];
	}
	return r;
};
