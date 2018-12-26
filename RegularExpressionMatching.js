//     const first = s.length!=0&&(p.charAt(0)==='.'||p.charAt(0)===s.charAt(0))
//     if(p.length>1&&p.charAt('1')==='*')
//     {
// 	    return isMatch(s,p.substring(2))||first&&isMatch(s.substring(1),p)
//     }
//     else
//     {
//     	return first&&isMatch(s.substring(1),p.substring(1))
//     }
// };
// console.log(isMatch('mississippi','mis*is*p*.'))

var isMatch = function (s,p) {
	const arr = [];
	for(let q=0;q<s.length+1;q++)
	{
		arr.push([])
	}
	let j=0,i=0
	function dp(i,j,str,partten)
	{
		const first =j<partten.length&&i<str.length&&( partten.charAt('j')=='.'||partten.charAt('j')==str.charAt('i'))
		if(j==partten.length){
			str.length==i?arr[i][j]=true:false;
		}
		if(partten.length>1&&j+1<partten.length&&partten.charAt(j+1)=='*')
		{
			arr[i][j] = dp(i,j+2,str,partten)||(first&&dp(i+1,j,str,partten))
		}
		else{
			arr[i][j] = first&&(i+1)<str.length&&dp(i+1,j+1,str,partten)	
		}
		return arr[i][j]

	}
	dp(0,0,s,p)
	return arr[0][0]
}
console.log(isMatch('aa','a*'))
