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
var isSymmetric = function(root) {
    var left = [], right = [];  
    if(root === null) return true;
    left.push(root);
    right.push(root);
    while(left.length&&right.length){
        var node1 = left.shift();
        var node2 = right.shift();
        if(node1.val!==node2.val)
        {   
            return false;
        }   
        if(node1.left&&node2.right)
        {   
            left.push(node1.left)
            right.push(node2.right)
        }   
        else if(node1.left||node2.right)
        {   
            return false
        }   
        if(node1.right&&node2.left)
        {   
            left.push(node1.right)
            right.push(node2.left)
        }   
        else if(node1.right||node2.left){
            return false
        }   
    }   
    return true;
};
