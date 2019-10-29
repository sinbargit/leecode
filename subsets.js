/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
	var arr = [[]];
	for (var num of nums)
	{
		var l = arr.length
		for(var i=0;i<l;i++)
		{
			var _arr = arr[i]
			var temp = Array.prototype.slice.call(_arr)
			temp.push(num)
			arr.push(temp)
		}
	}
	return arr;
};
