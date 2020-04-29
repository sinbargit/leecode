/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    var queue = [];
    var _root = root
    if(!root) return null;
    queue.push(root)
    while(queue.length)
    {
	var l = queue.length;
	for(var i=0;i<l;i++)
	{
	    root = queue[i]; 
	    i+1==l?root.next = null:root.next = queue[i+1] 
	    root.left&&queue.push(root.left)
	    root.right&&queue.push(root.right)
	}
	queue = queue.slice(l)
    }
    return _root;
};
