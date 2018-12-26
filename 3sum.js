function duplicatless(arr)
{
	var r = []
	arr.sort(function(a,b){
		if(JSON.stringify(a.sort())>JSON.stringify(b.sort()))
		{
			return 1
		}
		else
		{
			return -1
		}
	})
	for(var i=0;i<arr.length;i++)
	{
		if(i==0||JSON.stringify(arr[i].sort())!=JSON.stringify(arr[i-1].sort()))
		{
			r.push(arr[i])
		}
	}
	return r
}
function binarySearch(arr,key,i,j)
{
	while(i<=j)
	{
		var m = parseInt(i+(j-i)/2)
		if(arr[m]===key)
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
var threeSum = function(nums) {
	var arr = []
	nums = nums.sort(function(a,b){
		if(a-b>=0)
		{
			return 1;
		}
		else{
			return -1;
		}
	});
    for(var i=0;i<nums.length;i++)
    {
    	for(var j=i+1;j<nums.length;j++)
    	{
    		if(j+1<nums.length)
    		{
	    		var two = nums[i]+nums[j]
	    		var r = binarySearch(nums,0-two,j+1,nums.length-1);
	    		if(r!==false)
	    		{
	    			arr.push([nums[i],nums[j],nums[r]])
	    		}	
    		}
    	}
    }
    
    return duplicatless(arr)
};
console.log(threeSum([13,-5,3,3,-1,13,3,1,-9,-4,9,12,6,-9,-6,-12,-8,3,12,14,4,-15,2,-11,4,-12,10,9,-6,-3,-8,14,7,3,2,-8,-7,-10,8,-8,-7,-6,-11,6,-7,-2,9,-8,8,-2,13,-10,-2,0,-14,-13,-4,11,3,-3,-7,3,-4,8,13,13,-15,-9,10,0,-2,-12,1,2,9,1,8,-4,8,-7,9,7,-2,-15,14,0,-13,-13,-12,-2,-1,-11,8,10,12,6,8,4,12,3,11,-12,-2,-3,5,-15,6,-10,-4,-1,-1,-10,13]))