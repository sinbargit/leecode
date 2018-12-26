/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths1 = function(m, n) {
	var go = function(i,j)
	{
		console.log(i,'**',j)
	    if(i==m||j==n) 
	    {
	    	return 1;
	    }
	    else
	    {
	    	return go(i+1,j)+go(i,j+1)
	    }
	} 
	
	return go(1,1);
};
var uniquePaths = function(m, n) {
	var arr = []
	
	for(var i=1;i<=m;i++)
	{
		arr[i] = [];
		for(var j=1;j<=n;j++)
		{
			arr[i][j] = 1
		}
	}
	//console.log(arr)
	for(var p=1;p<m;p++)
	{
		for(var q=1;q<n;q++)
		{
			console.log(p+1,'--',q+1)
			arr[p+1][q+1] = arr[p+1][q]+arr[p][q+1]
		}
	}
	
	return arr[m][n];
};

console.log(uniquePaths(5,3))
console.log(uniquePaths1(5,3))
