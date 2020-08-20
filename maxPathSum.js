var maxPathSum = function (root) {
    let max = Number.MIN_SAFE_INTEGER;

    function getValue(root) {
        let left = Number.MIN_SAFE_INTEGER;
        let right = left;

        if (root.left) {
            left = getValue(root.left);
        }
        if (root.right) {
            right = getValue(root.right);
        }
        console.log(left, '--', right);
        let temp = root.val;
        if (left > 0 && right > 0) {
            temp = temp + Math.max(left, right);
        }
        else if (left > 0) {
            temp += left;
        }
        else if (right > 0) {
            temp += right;
        }
        if (left > 0 && right > 0) {
            max = Math.max(root.val + left + right, max);
        }
        else {
            max = Math.max(temp, max);
        }
        return temp;
    }

    getValue(root);
    return max;
};

var maxPathSum=function(root){
    let maxPath=-Infinity;
    function depTree(root) {
        if(!root) return 0;
        let left=Math.max(0,depTree(root.left))
        let right=Math.max(0,depTree(root.right))
        maxPath=Math.max(maxPath,left+right+root.val)
        return Math.max(left,right)+root.val;
    };
    depTree(root);
    return maxPath
}
