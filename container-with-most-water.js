var maxArea = function(height) {
	let i=0;
	let j=height.length-1
	let area = 0;
	while(i<j)
	{
		let newArea =Math.min( height[j],height[i])*(j-i);
		if(newArea>area)
		{
			area = newArea
		}
		height[i]>height[j]?j--:i++
	}
	return area

};
console.log(maxArea( [1,8,6,2,5,4,8,3,7]))
