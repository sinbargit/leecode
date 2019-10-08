/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	var left = ['(','[','{'];
	var right = [')',']','}'];
	var i=0;
	var stack = [];
	while(i<s.length)
	{
		var k = s.substring(i,i+1);
		if(left.includes(k))
		{
			stack.push(k);	
		}else if(right.includes(k)){
			var prev = stack.pop();
			if(left.indexOf(prev)!==right.indexOf(k)){
				return false;	
			}	
		}
		else{
			return false;
		}
		i++;
	}
	return	stack.length==0?true:false;
};
console.log(isValid('()[]{}'))
console.log(isValid('([]{}'))
console.log(isValid('([{{}}])'))
