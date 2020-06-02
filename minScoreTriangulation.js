/**
 * @param {number[]} A
 * @return {number}
 */
var minScoreTriangulation = function(A) {
	const l = A.length - 1
	const dp = new Array(A.length).fill('').map(()=>{
		return new Array(A.length).fill('')
	})
	let i = 0;
	while(i<l)
	{
		dp[i][i+1] = 0
		i++
	}
	console.log(dp);
	i=l
	while(i>=0)
	{
		let j = i+2;
		while(j<=l)
		{
			let min = Number.MAX_SAFE_INTEGER
			let m = i+1
			console.log(i,j,m)
			while(m<j)
			{
				min = Math.min(dp[i][m]+A[i]*A[j]*A[m]+dp[m][j],min)
				m++
			}
			dp[i][j] = min
			j++
		}
		i--
	}
	console.log(dp)
	return dp[0][l]
};
console.log(minScoreTriangulation([3,7,4,5]))
console.log(minScoreTriangulation([1,3,1,4,1,5]))
