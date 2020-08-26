/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const col = {};
    const left = {};
    const right = {};
    const res = [];
    deep(0, []);

    function deep(row, cur) {
        for (var i = 0; i < n; i++) {
            if (col[i] || left[row + i] || right[row - i]) {
                continue;
            }
            else {
                let str = '';
                for (let k = 0; k < n; k++) {
                    k === i ? str += 'Q' : str += '.';
                }
                cur.push(str);
                if (row === n - 1) {
                    res.push(JSON.parse(JSON.stringify(cur)));
                    cur.pop();
                    return;
                }
                col[i] = left[row + i] = right[row - i] = 1;
                deep(row + 1, cur);
                col[i] = left[row + i] = right[row - i] = 0;
                cur.pop();
            }
        }
    }

    return res;
};
console.log(solveNQueens(5));
