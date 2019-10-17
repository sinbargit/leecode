/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	var n1 = 1;
	var n2 = 2;
	var nn = '';
	var i = 3;
	if(n==1)return 1;
	if(n==2)return 2;
	while(i<=n)
	{
		var temp = nn;
		nn = n1 + n2; 
		n1 = n2;
		n2 = nn;
		i++;
	}
	return nn;
};
