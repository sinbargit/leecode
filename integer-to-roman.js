var intToRoman = function(num) {
	const thousands = Number.parseInt(num/1000)	
	num = num - thousands*1000
	const hundreds = Number.parseInt(num/100)
	num = num - hundreds*100
	const tens = Number.parseInt(num/10)
	const ones = num - tens*10
	let s = ''
	console.log(thousands,',',hundreds,',',tens,',',ones)
	s += processNums(thousands,'M')
	s += processNums(hundreds,'C','D','M')
	s += processNums(tens,'X','L','C')
	s += processNums(ones,'I','V','X')
	function processNums(num,sym1,sym2,sym3)
	{
		let str=''
		if(num<4)
		{
			while(num!=0)
			{
				str+=sym1
				num--
			}
		}
		else if(num==4){
			str = sym1+sym2
		}
		else if(num==5)
		{
			return sym2
		}
		else if(num<9){
			str = sym2
			while(num-5!=0)
			{
				str+=sym1
				num--
			}
		}
		else
		{
			str = sym1+sym3	
		}
		return str;
	}
	return s;
};
console.log(intToRoman(58))
