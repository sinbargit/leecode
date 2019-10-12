/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	//转置	   
	function exchange(matrix,i,j)
	{
		var temp = matrix[i][j];
		matrix[i][j] =matrix[j][i];
		matrix[j][i] = temp;
	}
	for(var p=0;p<matrix.length;p++){
		for(var q=0;q<p;q++)
		{
			exchange(matrix,p,q);
		}
	}
	console.log(matrix)
	for(var i of matrix)
	{
		var l = 0;
		var h = i.length-1;
		while(l<h)
		{
			var t = i[l]
			i[l] = i[h] 
			i[h] = t
			l++;
			h--;
		}
	}
	return matrix
};
rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])
