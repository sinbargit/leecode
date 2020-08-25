/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// DFS解法
var lowestCommonAncestor = function (root, p, q) {

    let pp, qq;

    function deep(node, parent) {
        if (node) {
            node.parent = parent;
            (p.val === node.val) && (pp = node);
            (q.val === node.val) && (qq = node);
            deep(node.left, node);
            deep(node.right, node);
        }
    }

    deep(root, null);
    const _p = [];
    const _q = [];
    while (pp) {
        _p.push(pp);
        pp = pp.parent;
    }
    while (qq) {
        _q.push(qq);
        qq = qq.parent;
    }
    let lq = _q.length - 1;
    let lp = _p.length - 1;
    while (lq >= 0 || lp >= 0) {
        if (lq < 0) {
            return _q[lq + 1];
        }
        if (lp < 0) {
            return _p[lp + 1];
        }
        if (_p[lp].val !== _q[lq].val) {
            return _p[lp + 1];
        }
        lp--;
        lq--;
    }
    return false;
};
// 利用搜索树性质
var lowestCommonAncestor = function (root, p, q) {
    function deep(node) {
        if (node.val < Math.min(p.val, q.val)) {
            return deep(node.right);
        }
        else if (node.val > Math.max(p.val, q.val)) {
            return deep(node.left);
        }
        else {
            return node;
        }
    }

    return deep(root);
};
