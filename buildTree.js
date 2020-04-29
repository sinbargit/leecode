/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 这是个值得反复思考的题目
 */
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
var buildTree = function(preorder, inorder) {
	var preIndex = -1;
	function generate(subInorder){
		var temp = preorder[preIndex+1];
		var rootIndex = subInorder.indexOf(temp);
		console.log(subInorder,'--',temp)
		if(rootIndex==-1) return null;
		preIndex++
		var root = new TreeNode(temp);
		var left = subInorder.slice(0,rootIndex);
		var right = subInorder.slice(rootIndex+1);
		root.left = generate(left)
		root.right = generate(right)
		console.log(root)
		return root;
	}
	return	generate(inorder)
};
buildTree([3,9,20,15,7],[9,3,15,20,7])
