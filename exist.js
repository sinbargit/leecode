/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
	var arr = word.split('');
	var temp = {};
	for(var i=0;i<board.length;i++)
	{
		for(var j=0;j<board[i].length;j++)
		{
			if(walk(i,j,0)){return true}
		}
	}
	function walk(i,j,p)
	{
		//console.log(i,'--',j,'--',arr[p],'--',p,temp[i+''+j])
		if(p == arr.length)
		{
			return true;
		}
		var key = i+'-'+j;
		if(board[i]&&board[i][j]==arr[p]&&!temp[key])
		{
			temp[key] = true;	
			if(i+1<board.length&&walk(i+1,j,p+1)||walk(i,j+1,p+1)||i-1>=0&&walk(i-1,j,p+1)||j-1>=0&&walk(i,j-1,p+1))
			{return true}
			temp[key] = false;
		}
	}
	return false;
};
// console.log(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]],"ABCESEEEFS"))
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"))
