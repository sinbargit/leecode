var convert = function(s, numRows) {
	if(numRows===1)return s
	const arr = s.split('')
	const rows = numRows;
	const out = []
	for(let i=0;i<numRows;i++)
	{
		for(let j=0;j<arr.length;j+=(2*numRows-2))
		{
			let v = i+j;
			if(v<arr.length)
			{
				out.push(arr[v])
				if(i!=0&&i!=numRows-1)
				{
					const next = v+2*(numRows-i-1);
					if(next<arr.length)
					{
						out.push(arr[next])
					}
				}
			}
		}
	}
	return out.join('');
};
console.log(convert('A',1))