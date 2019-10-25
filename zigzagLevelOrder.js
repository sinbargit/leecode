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
var zigzagLevelOrder = function(root) {
	var queue = [];
	if(!root) return [];
	queue.push(root)
	var arr = [];
	var reverse = false;
	while(queue.length)   
	{
		var temp = queue.length;
		var _arr = []
		for(var i=0;i<temp;i++)
		{
			root = queue.shift()
			_arr.push(root.val);
			root.left&&queue.push(root.left)
			root.right&&queue.push(root.right)
		}
		if(!reverse)
		{
			arr.push(_arr)
		}
		else{
			arr.push(_arr.reverse())
		}
		reverse = !reverse
		
	}
	return arr;
};
