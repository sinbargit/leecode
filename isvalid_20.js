/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const left = ['{', '[', '('];
    const right = ['}', ']', ')'];
    const arr = [...s];
    const stack = [];
    let i = 0;
    while (i < arr.length) {
        if (left.indexOf(arr[i]) !== -1) {
            stack.push(arr[i]);
        }
        else {
            const temp = stack.pop();
            if (left.indexOf(temp) !== right.indexOf(arr[i])) {
                return false;
            }
        }
        i++;
    }
    return stack.length === 0;
};
