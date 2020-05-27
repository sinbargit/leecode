/**
 * @param {number[]} A
 * @return {number}
 */
var minScoreTriangulation = function(A) {
	const l = A.length	
	const dp = new Array(l).fill('').map(()=>{
		return new Array(l).fill('')
	})
	let i = 0;
	while(++i<l)
	{
		dp[i][i+1] = 0
	}
	i=0
	while(i<l)
	{
		let j = l;
		while(i<j)
		{
			
		}
		let m = i+1
		dp[i][m] = 0
		while(m<j)
		{
			dp[i][j] = dp[i][m]	
		}
	}
};
