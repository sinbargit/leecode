/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var i = 0;
    var r = 0;
    while(i<32)
    {
	r <<= 1;	
	r += n&1;
	n >>>= 1;
	i++;
    }
    // 修复js不支持 32位无符号数的问题。达到32位时第一位会变成符号位
    return r>>>0; 
};
