/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let si = 0, pi = 0;

    function match(si, pi) {
        if (si >= s.length && pi >= p.length) {
            return true;
        }
        let pic = p.charAt(pi);
        let sic = s.charAt(si);
        let pic2 = p.charAt(pi + 1);
        if (si <= s.length && (pic === sic || sic && pic === '.')) {
            if (pic2 === '*') {
                return match(si + 1, pi) || match(si + 1, pi + 2) || match(si, pi + 2);
            }
            return match(si + 1, pi + 1);
        }
        else if (pic2 === '*') {
            return match(si, pi + 2);
        }
        else {
            return false;
        }
    }

    return match(0, 0);
};
console.log(isMatch('aa', 'a'));
console.log(isMatch('aa', 'a*'));
console.log(isMatch('ab', '.*'));
console.log(isMatch('aab', 'c*a*b'));
console.log(isMatch('mississippi', 'mis*is*p*.'));
console.log(isMatch('a', '.*..a'));
