// //实现1 merge
// var findMedianSortedArrays = function(nums1, nums2) {
//     const arr = merge(nums1,nums2)
//     return arr.length%2===0?(arr[arr.length/2]+arr[arr.length/2-1])/2:arr[(arr.length-1)/2]
// };
// function merge(nums1,nums2)
// {
// 	const l = nums1.length+nums2.length
// 	const arr = [];
// 	let c1 = 0
// 	let c2 = 0
// 	while(true)
// 	{
// 		if(c1+c2===l) break;
// 		if(nums1[c1]===undefined)
// 		{
// 			arr.push(nums2[c2++])
// 		}
// 		else if(nums2[c2]===undefined)
// 		{
// 			arr.push(nums1[c1++])
// 		}
// 		else if(nums1[c1]>nums2[c2])
// 		{
// 			arr.push(nums2[c2++])
// 		}
// 		else
// 		{
// 			arr.push(nums1[c1++])
// 		}
// 	}
// 	return arr;
// }


//实现2 2分查找
function findMedianSortedArrays(nums1,nums2)
{
	let [i,j] = binarySearch(nums1,nums2,nums1.length,nums2.length)
	console.log(i,'~~',j)
	if((nums1.length+nums2.length)%2==0)
	{
		return (Math.max(nums1[i],nums2[j])+Math.min(nums1[i+1],nums2[j+1]))/2
	}
	else
	{
		return Math.max(nums1[i],nums2[j])
	}
}
function binarySearch(nums1,nums2,m,n)
{
	if(nums1.length>nums2.length)
	{
		var t = nums1
		nums1 = nums2
		nums2 = t;
	}
	var i = Number.parseInt((nums1.length+1)/2)
	var j = Number.parseInt((m+n+1)/2)-i
	while(true)
	{
		console.log(i,'--',j)
		if(i-1===-1)
		{
			return [i,j]
		}
		if(j-1===-1)
		{
			return [i-2,j]
		}
		if(i===nums1.length)
		{
			return [i-1,j-1]
		}
		if(j===nums2.length)
		{
			return [i,j-1]
		}
		if(nums1[i-1]<=nums2[j]&&nums2[j-1]<=nums1[i])
		{
			return [i-1,j-1]
		}
		if(nums1[i-1]>nums2[j])
		{
			i--
			j++
		}
		else if(nums2[j-1]>nums1[i])
		{
			i++
			j--
		}
	}
}
console.log(findMedianSortedArrays([],[3,4]))