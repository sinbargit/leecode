var romanToInt = function(s) {
	const arr = s.split('')
	let num = 0
	const map = {
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000,
	}
	for(var i=0;i<arr.length;i++)
	{
		num+=(map[arr[i]]<map[arr[i+1]])?-map[arr[i]]:map[arr[i]]	
	}
	return num
};
console.log(romanToInt('MCMXCIV'))
