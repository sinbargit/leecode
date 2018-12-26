/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function(obstacleGrid) {
	var row = obstacleGrid.length;
	var col = obstacleGrid[0].length;
	var arr = []
	for(var p=0;p<row;p++)
	{
		arr[p] = [];
		for(var q=0;q<col;q++)
		{
			arr[p][q]=1
		}
	}
	for(var i=0;i<row;i++)
	{
		for(var j=0;j<col;j++)
		{
			obstacleGrid[i][j]===1&&(arr[i][j]=0)
			if(i===0&&j!=col-1)
			{
				arr[i][j+1] = obstacleGrid[i][j+1]==1?0:arr[i][j]
			}
			if(j===0&&i!=row-1)
			{
				arr[i+1][j] = obstacleGrid[i+1][j]==1?0:arr[i][j]
			}
			if(i!=row-1&&j!=col-1)
			{
				arr[i+1][j+1] = obstacleGrid[i+1][j+1]==1?0:arr[i+1][j]+arr[i][j+1]
			}
		}
	} 
	return arr[row-1][col-1]
};
var data = 
[[0,1],[1,0]]
console.log(uniquePathsWithObstacles(data))