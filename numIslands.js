/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    var count = 0;
    function deep(i,j)
    {
	var stack = [];
	stack.push([i,j])
	while(stack.length)
	{
	    var nodeArr = stack.pop();
	    grid[nodeArr[0]][nodeArr[1]]=0;
	    if(grid[nodeArr[0]+1]&&grid[nodeArr[0]+1][nodeArr[1]])
	    {
		stack.push([nodeArr[0]+1,nodeArr[1]])
	    }
	    if(grid[nodeArr[0]]&&grid[nodeArr[0]][nodeArr[1]+1])
	    {
		stack.push([nodeArr[0],nodeArr[1]+1])
	    }

	}
    }
   for(row in grid)
    {
	for(col in grid[row])
	{
	    grid[row][col]  = parseInt(grid[row][col])
	    if(grid[row][col] == 1)
	    {
		count++;
		row = parseInt(row)
		col = parseInt(col)
		deep(row,col)
		console.log(grid)
	    }
	}
    }
    return count;

};
