/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	var i=0,j=needle.length;
	while(j<haystack.length+1)
	{
		if(haystack.substring(i,j)===needle)	
		{
			return i;
		}
		i++,j++;
	}
	return -1;
};
