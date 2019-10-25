/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	function innerSort(ele){
		var arr = ele.split('');	
		return arr.sort().join('');
		
	}
	strs.sort(function(a,b){
		if(innerSort(a)>innerSort(b))
		{
			return 1
		}
		else {
			return -1
		}
	
	})
	var arr = [];
	var sub = [];
	for(var j =1;j<=strs.length;j++)
	{
		sub.push(strs[j-1])
		if(undefined === strs[j]||innerSort(strs[j-1])!==innerSort(strs[j]))
		{
			arr.push(sub)
			sub = [];
		}
	}
	return arr;
};

