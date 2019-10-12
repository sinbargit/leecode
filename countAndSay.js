/**
 * @param {number} n
 * @return {string}
 * 该题目 意思是 下一个数是对上一个数的描述
 */
var countAndSay = function(n) {
	var i=1;
	var r = '';
	while(i<=n)
	{
		if(i===1)
		{
			r = '1';	
		}
		else{
			var j=0,k=0;
			var _r=[];
			var count = 0 
			var cur = r.substring(k,k+1)
			while(true)
			{
				if(j===r.length)
				{
					_r.push(count+cur)
					break;
				}
				
				if(r.substring(j,j+1)===cur)
				{
					count++;
				}
				else
				{
					_r.push(count+cur)
					count = 1;
					k = j;
					cur = r.substring(k,k+1)
				}
				j++
			}
			r = _r.join('')
		}
		console.log(r)
		i++;
	}
	return r;

};
