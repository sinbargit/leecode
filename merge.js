/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
	var l = nums1.length-1;
	while(m>=0&&n>=0)
	{
		if(nums1[m]>=nums2[n])
		{
			nums1[l] = nums1[m]	
			m--
		}
		else
		{
			nums1[l] = nums2[n]
			n--
		}
		l--
	}
	while(n>=0)
	{
		nums1[l--] = nums2[n--]
	}
	while(m>=0)
	{
		nums1[l--] = nums1[m--]
	}
};
