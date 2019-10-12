/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	var i=0,j=s.length-1;
	var reg = /[a-zA-Z0-9]/
	while(i<j)
	{
		const a = s.substring(i,i+1).toLowerCase()
		const b = s.substring(j,j+1).toLowerCase()
		if(!reg.test(a))
		{
			i++
			continue
		}
		if(!reg.test(b))
		{
			j--
			continue
		}
		if(a!==b)
		{
			return false;
		}
		i++,j--;
	}
	return true;
};
