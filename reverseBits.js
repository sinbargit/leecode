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
		console.log('fir__',r.toString(2))
		r += n&1;
		console.log(r.toString(2))
		n >>>= 1;
		console.log('+',n.toString(2))
		i++;
	}
	return	r; 
};
reverseBits(0b11111111111111111111111111111101);
