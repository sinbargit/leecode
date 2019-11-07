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
		if(cur.length==n*2)
		{
			arr.push(cur)
			return;
		}
		if(left<n)
		{
			generate(left+1,cur+'(',right)
		}
		if(right<left)
		{
			generate(left,cur+')',right+1)
		}
	}
	generate(0,'',0)
	return arr;
};
generateParenthesis(3)
