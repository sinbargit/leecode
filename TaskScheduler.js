/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

 //题目只要求算出最短时间 不用输出数组
var leastInterval = function(tasks, n) {
    tasks = tasks.sort(function(a,b){
    	return a>b?1:-1
    })
    var arr = [];
    var count = 1;
    for(var i=1;i<tasks.length;i++)
    {
    	if(tasks[i]!=tasks[i-1]||i==tasks.length-1)
    	{
    		arr.push(count);
    		count = 1;
    	}
    	else
    	{
    		count++
    	}
    }
    arr = arr.sort();
    console.log(arr)
    interval = (arr.length-1>n?arr.length-1:n)+1
    return (arr[arr.length-1]-1)*interval+arr.length
};
console.log(leastInterval(["A","A","A","B","B","B"],0))