/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
	var i = 1;
	var r = []
	while(i<=n)    
	{
		if(i%15==0)
		{
			r.push("FizzBuzz")
		}
		else if(i%3==0)
		{
			r.push("Fizz")
		}
		else if(i%5==0)
		{
			r.push("Buzz")
		}
		else{
			r.push(""+i);			
		}
		i++;

	}
	return r;
};
