/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
	var i=0;
	var j=s.length-1;
	while(i<j)
	{
		var t = s[i]
		s[i] = s[j]
		s[j] = t;
		i++;
		j--;
	}
};
