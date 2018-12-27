var letterCombinations = function(digits) {
	const mapping = new Map([['2','abc'],['3','def'],['4','ghi'],['5','jkl'],['6','mno'],['7','pqrs'],['8','tuv'],['9','wxyz']])
	if(digits.length==1)
	{
		return mapping.get(digits).split('')
	}
	if(digits.length==0)
	{
		return [] 
	}
	var nums = digits.split('');
	function dp(prev,index)
	{
		var arr = []
		next = mapping.get(nums[index]).split('')
		prev.forEach((ele)=>{
			next.forEach((_ele=>{
				arr.push(ele+_ele)
			}))
		})
		if(index==nums.length-1)
		{
			return arr 
		}else{
			return dp(arr,++index)	
		}
	}
	return	dp(mapping.get(nums[0]).split(''),1)
};
console.log(letterCombinations('253'))
