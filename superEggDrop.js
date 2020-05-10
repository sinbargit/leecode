var superEggDrop = function(K, N) {
	var arr = [];
	if(K==1){
		return N 
	}
	if(N==1){
		return 1
	}
	if(N==0){
		return 0
	}
	//	function f(k,n)
	//	{       
	//		if(k==1){
	//			return n
	//		}
	//		if(n==1){
	//			return 1
	//		}
	//		if(n==0){
	//			return 0
	//		}
	//		if(arr[k+'_'+n])
	//		{
	//			return arr[k+'_'+n]
	//		}
	//		var m = Number.MAX_VALUE
	//		for(var i=1;i<=n;i++)
	//		{
	//			m=Math.min(m,Math.max(f(k-1,i-1),f(k,n-i))+1);
	//		}
	//		arr[k+'_'+n] = m		
	//		return m
	//	}

	function dp(k,n){
		if(k==1){
			return n
		}
		if(n==1){
			return 1
		}
		if(n==0){
			return 0
		}
		if(arr[k+'_'+n])
		{
			return arr[k+'_'+n]	
		}
		var h = n,l=1		
		while(l<=h)
		{
			var mid = parseInt((l+h)/2)
			console.log(mid)
			var f1 = dp(k,n-mid)
			var f2 = dp(k,n-mid-1)
			var g1 = dp(k-1,mid-1)
			var g2 = dp(k-1,mid)
			if(f2<=g2&&f1>=g1)
			{
				var r = Math.min(f1,g2)+1
				arr[k+'_'+n] = r
				return r 
			}
			if(f2<g2)
			{
				h = mid-1
			}
			if(f1>g1)
			{
				l = mid+1
			}
		}
	};
	return	dp(K,N)

}

	console.log(superEggDrop(2,6));
