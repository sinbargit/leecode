/**
 *  * @param {number} numRows
 *   * @return {number[][]}
 *    */
var generate = function(numRows) {
    var r = [];
    for(var i=1;i<=numRows;i++)
    {
	if(i==1)
	{
	    r.push([1]) 
	}
	else
	{
	    var prev = r[i-2]
	    var temp =	new Array(prev.length+1) 
	    for(var j=0;j<temp.length;j++)
	    {
		temp[j] = (j-1<0?0:prev[j-1]) + (j==prev.length?0:prev[j])
	    }
	    r.push(temp)
	}

    }
    return r;
};
console.log(generate(5))
