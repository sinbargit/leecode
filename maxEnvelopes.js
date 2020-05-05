/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    if(envelopes.length==0){
	return 0
    }
     envelopes.sort((a,b)=>{
	return compare(a,b)
    })   
    function lis(arr){
	dp = [arr[0]]
	for(var i=1;i<arr.length;i++)	
	{
	    bin(dp,arr[i])
	}
	return dp.length

    }
    
    function bin(tail,key)
    {
	var l = 0,h = tail.length-1
	// 2 3,5 4,6 7,6 4
	while(l<=h)
	{
	    var mid = parseInt((l+h)/2)
	    if(tail[mid][1]<key[1])  // 12345
	    {
		l = mid + 1
	    }
	    else {
		h = mid -1 
	    } 
	}
	tail[l] = key
    }
    function compare(a,b){
	if(a[0]>b[0]){
	    return 1
	}
	else if(a[0]<b[0]){
	    return -1
	}
	else if(a[1]<b[1]){
	    return 1
	}
	else {
	    return -1
	}

    }
    return lis(envelopes)
};
console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]))
