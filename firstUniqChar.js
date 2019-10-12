/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {	   
	if(s==='') return -1;
	const dup = [];
	loop:
	for(var i=0;i<s.length;i++)
	{
		const str = s.substring(i,i+1);
		if(dup.indexOf(str)!=-1)
		{
			continue;
		}
		var p = 0,q=s.length-1
		var left = right = false;
		while(p<q)
		{
			if(s.substring(p,p+1)===str)
			{
				left = true;
			}
			else{
				p++
			}
			if(s.substring(q,q+1)===str)
			{
				right = true;
			}
			else{
				q--
			}
			if(left&&right)
			{
				dup.push(str)
				continue loop;
			}
		}

		return i;
	}
	return -1;
};
console.log(firstUniqChar("loveleetcode"));
