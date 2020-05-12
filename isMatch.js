/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var node = {};
var isMatch = function (s, p) {
    let si = 0, pi = 0;
    const arr = [];

    function match(s, p, si, pi) {
        if (arr[`${si}_${pi}`] !== undefined) {
            return arr[`${si}_${pi}`];
        }

        const sic = s.charAt(si);
        const pic = p.charAt(pi);


        if (pi >= p.length && si >= s.length) {
            return true;
        }
        pi >= p.length && (pi = p.length);
        si >= s.length && (si = s.length);
        if (sic === pic || (sic && pic === '?')) {
            arr[`${si + 1}_${pi + 1}`] = match(s, p, si + 1, pi + 1);
            return arr[`${si + 1}_${pi + 1}`];
        }
        else if (pic === '*') {
            if (si > s.length - 1) {
                arr[`${si + 1}_${pi + 1}`] = match(s, p, si + 1, pi + 1);
                return arr[`${si + 1}_${pi + 1}`];
            }
            arr[`${si + 1}_${pi + 1}`] = match(s, p, si + 1, pi + 1);
            arr[`${si + 1}_${pi}`] = match(s, p, si + 1, pi);
            arr[`${si}_${pi + 1}`] = match(s, p, si, pi + 1);
            return arr[`${si + 1}_${pi + 1}`] || arr[`${si + 1}_${pi}`] || arr[`${si}_${pi + 1}`];
        }
        else {
            return false;
        }
    }

    return match(s, p, si, pi);
};
// console.log(isMatch('ho', 'ho**'));
// console.log(isMatch('adceb', '*a*b'));
 console.log(isMatch('abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb', '**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bbj'));
