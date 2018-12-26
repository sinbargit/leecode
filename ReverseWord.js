/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    str = str.replace(/ +/g,' ').replace(/^ +/,'').replace(/ +$/,'');
    var arr = str.split(' ');
    return arr.reverse()
};
console.log(reverseWords(" the sky is blue "))