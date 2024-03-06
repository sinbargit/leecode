function binarySearch(arr,key,i,j)
{
	while(i<=j)
	{
		var m = parseInt(i+(j-i)/2)
		if(arr[m]==key)
		{
			return m;
		}
		else if(arr[m]<key)
		{
			i = m+1
		}
		else
		{
			j = m-1
		}
	}
	return false;
}
function search(arr,key,i,j)
{
	for(;i<=j;i++)
	{
		if(arr[i]===key)
		{
			return i
		}
	}
	return false;
}
function insert(arr,v)
{
	var l = v-1
	for(var i=l;i>=0;i--)
	{
		if(arr[v]<arr[i])
		{
			var temp = arr[v];
			arr[v] = arr[i];
			arr[i] = temp;
		}
	}
}
function lengthOfLongestSubstring(str)
{
	var arr = str.split('');
	var result = str.length==0?0:1;
	var l = 0;
	var first = false;
	for(var i=1;i<arr.length;i++)
	{
		//var t = binarySearch(arr,arr[i],l,i-1);
		var t = search(arr,arr[i],l,i-1);
		if(t!==false){
			first = true;
			result<(i-l)&&(result=i-l);
			l = t+1;
		}
		else if(i==arr.length-1)
		{
			result<(i-l+1)&&(result=i-l+1);
		}
		//insert(arr,i);
	}

	return first?result:str.length
}
//console.log(lengthOfLongestSubstring("etyyepfaesjlkzivdevdllygazxjndjrxhrdyyddqnqdoayshwxshxzjywu"))

function newFunc(str){
	const map = new Map()
	let cur=0
	let len=0
	for(let i = 0;i<str.length;i++){
		const letter = str.charAt(i)
		if(map.get(letter)!==undefined&&map.get(letter)>=cur){
			cur = map.get(letter) + 1
			map.set(letter,i)	
			console.log(letter,'**',i,'**',cur)
		}
		else{
			map.set(letter,i)	
		}
		console.log(cur,'---',i)
		len=i-cur+1>len?i-cur+1:len
	}
	return len
}
console.log(newFunc('abcabcbb'))