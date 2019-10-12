/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	var arr =  [];
	var index = new Array(26).fill(0);
	if(s.length!==t.length)
	{
		return false;
	}
	for(var i=0x61;i<=0x7A;i++)
	{
		arr.push(String.fromCharCode(i));	
	}
	console.log(arr)
	for(var j=0;j<s.length;j++)
	{
		index[arr.indexOf(s.substring(j,j+1))]++
		index[arr.indexOf(t.substring(j,j+1))]--
	}
	for(v of index)
	{
		if(v!=0)
		{
			return false
		}
	}
	return  true
};
