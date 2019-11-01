/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
	function swap(arr,i,j)
	{
		var temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}
	function partion(arr,l,h){
		var i = l+1;
		var j = h;
		var cur = l;
		while(true)
		{
			while(arr[i]<arr[l])
			{
				if(i++>h) break;
			}
			while(arr[j]>arr[l])
			{
				if(j--<=l) break;
			}
			if(i>=j){
				break;
			}
			swap(arr,i,j)
			i++
			j--

		}
		swap(arr,l,j)
		console.log('part',arr)
		return j;
	}   
	function doit(nums,l,h){
		if(l>h)
		{
			return null;
		}
		var j = partion(nums,l,h)
		console.log(l,'--',h,'--',j)
		console.log(nums.length-j)
		if(k == nums.length-j)
		{
			return  nums[j];
		}
		else
		{
			if(k<nums.length-j)
			{
				l = j+1
			}
			else{
				h = j-1
			}
			return doit(nums,l,h)
		}

	}
	var l =0,h=nums.length-1;
	return doit(nums,l,h)
};

console.log(findKthLargest([3,2,1,5,6,4],2))
