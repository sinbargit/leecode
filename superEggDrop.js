var superEggDrop = function(K, N) {
	var arr = [];
	function f(k,n)
	{       
		if(k==1){
			return n
		}
		if(n==1){
			return 1
		}
		if(n==0){
			return 0
		}
		if(arr[K+'_'+N])
		{
			return arr[K+'_'+N]
		}
		var m = Number.MAX_VALUE
		for(var i=1;i<=n;i++)
		{
			m=Math.min(m,Math.max(f(k-1,i-1),f(k,n-i))+1);
		}
		arr[K+'_'+N] = m		
		return m
	}
	var h = N,l=1		
	m1 =m2=1	
	while(l<h)
	{
		var mid = parseInt((l+h)/2)
		if(f(K,N-mid-1)<f(K-1,mid)&&f(K,N-mid)>f(K-1,mid-1))
		{
			return f(K-1,mid)>f(K,N-mid)?mid:(mid+1)
		}
		if(f(K,N-mid-1)<f(K-1,mid))
		{
			h = mid
		}
		if(f(K,N-mid)>f(K-1,mid-1))
		{
			l = mid
		}
	}
	// return f(K,N)
};
console.log(superEggDrop(2,6));
