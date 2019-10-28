/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	var left = 0;
	var right = 0;
	var arr = [];
	var cur = '';
	function generate(left,cur,right){
		console.log(left,'--',right,'--',cur)
		if(cur.length==n*2)
		{
			arr.push(cur)
			return;
		}
		if(left<n)
		{
			generate(++left,cur+='(',right)
		}
		if(right<left)
		{
			generate(left,cur+=')',++right)
		}
	}
	generate(0,'',0)
	return arr;
};
generateParenthesis(3)
