/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
        function TreeNode(val) {
                this.val = val;
                this.left = this.right = null;
        }

        if(nums.length===0)
        {
                return null;
        }
        root = new TreeNode();
        var m = parseInt(nums.length/2);
        root.val = nums[m];
        setLeftNode(0,m,root);
        setRightNode(m+1,nums.length,root);
        function setLeftNode(l,h,node){
                if(l>=h) return;
                var  m = parseInt((l+h)/2);
                node.left = new TreeNode(nums[m])
                setLeftNode(l,m,node.left)
                setRightNode(m+1,h,node.left)
        }
        function setRightNode(l,h,node){
                if(l>=h) return;
                var  m =parseInt((l+h)/2);
                node.right = new TreeNode(nums[m])
                setLeftNode(l,m,node.right)
                setRightNode(m+1,h,node.right)

        }
    return root

};
