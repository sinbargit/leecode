/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
	var col = [];
	var row = [];
	for(var i =0 ;i<matrix.length;i++)
	{
		for(var j=0;j<matrix[i].length;j++)
		{
			if(matrix[i][j] === 0)
			{
				col[j] = 0;
				row[i] = 0;
			}
		}
	}
	for(var p=0;p<matrix.length;p++)
	{
		for(var q=0;q<matrix[p].length;q++)
		{
			if(col[q] === 0||row[p]===0)
			{
				matrix[p][q] = 0;
			}
		}
	}
};
