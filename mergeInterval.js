/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	if(intervals.length==0) return [];
	intervals.sort((a,b)=>{
		return a[0]-b[0];
	})   
	var temp = intervals[0];
	var arr = [];
	for(var i = 1;i<intervals.length;i++)
	{
		if(temp[1]>=intervals[i][0]&&intervals[i][1]>temp[1])
		{
			temp[1]=intervals[i][1]	
		}
		else if(temp[1]<intervals[i][0])
		{
			arr.push(temp)
			temp = intervals[i]
		}
	}
	arr.push(temp)
	return arr;
	
};
console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
