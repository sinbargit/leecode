/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
	nums1 = nums1.sort((a,b)=>{
		return a-b>0?1:-1;
	})   
	nums = nums2.sort((a,b)=>{
		return a-b>0?1:-1
	})
	var arr = [];
	var i=0,j=0;
	while(i<nums1.length&&j<nums2.length)
	{
		if(nums1[i]===nums2[j])
		{
			arr.push(nums1[i])
			i++;j++;
		}
		else if(nums1[i]<nums2[j])
		{
			i++
		}
		else
		{
			j++
		}
	}
	return arr[]

};
