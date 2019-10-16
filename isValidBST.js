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
 
/**Recursive solution
 *对于每个分支找到上下边界
 *
 *                       6   .x  
 *					  	/ \ .
 *					   4   8
 *					  / \ /	\
 *					 2  5 7  9 
 *对于9 要大于8并且小于8的右上节点(假设有的话)
 *于是 	compare(node.right,node.val,upper)
 *其中upper就是节点8在限定边界时的上边界
 *
 *
 *
 *
 */
var isValidBST = function(root) {
	if(root === null)   
	{
		return true;
	}
	compare(root,null,null);
	function compare(node,lower,upper)
	{
		if(lower!=null&&node.val<=lower) return false;	
		if(upper!=null&&node.val>=upper) return false;
		compare(node.right,node.val,upper)
		compare(node.left,lower,node.val)
	}
};

/**
 *
 *迭代版本
 *
 *
 */

var isValidBST = function(root) {
	if(root === null) return true;					
	var cur = [],lower = [],upper = [];
	cur.push(root),lower.push(null),upper.push(null);
	while(cur.length)
	{
		node = cur.shift();
		l = lower.shift();
		u = upper.shift();
		if(node === null) continue;
		if(l!=null&&node.val<=l) return false;
		if(u!=null&&node.val>=u) return false;
		cur.push(node.left)
		lower.push(l)
		upper.push(node.val)

		cur.push(node.right)
		lower.push(node.val)
		upper.push(u)
	}
}
/**
 *
 *中序遍历版本
 *
 *
 */


var isValidBST = function(root) {
	var outer = [];
	var t = null;
	while(outer.length||root)
	{
		root&&outer.push(root)
		while(root&&root.left)
		{
			outer.push(root.left)
			root = root.left;
		}
		var node = outer.pop()
		if(t!=null&&t>=node.val) return false;
		t = node.val;
		root = node.right
	}
	return true
}
