//分治
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return 1 / myPow(x, -(n+1)) / x;
    }
    if (n & 1 === 1) {
        return x * myPow(x, n - 1);
    }
    else {
        return myPow(x*x,n>>1);
    }
};
