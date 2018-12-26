function longestPalindrome(s)
{
	var arr = s.split('')
	let l = 0;
	let lArr = [0,0];
	for(let i=0;i<arr.length;i++)
	{
		let temp1 = extend(arr,i,i)
		let temp2 = extend(arr,i,i+1)
		let temp = 0
		if(temp1[1]-temp1[0]>temp2[1]-temp2[0])
		{
			if(temp1[1]-temp1[0]>l)
			{
				l=temp1[1]-temp1[0]
				lArr = temp1
			}
		}
		else{
			if(temp2[1]-temp2[0]>l)
			{
				l=temp2[1]-temp2[0]
				lArr = temp2
			}
		}
	}
	return s.slice(lArr[0]+1,lArr[1])
}
function extend(arr,i,j)
{
	let p = i;
	let q = j;
	while(arr[p]&&arr[q])
	{
		if(arr[p]==arr[q])
		{
			p--;q++
		}
		else
		{
			break
		}
	}
	return [p,q]
}
console.log(longestPalindrome('cbbd'))