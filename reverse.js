var reverse = function(x) {
	var arr = [];
	var positive = x>0?true:false
    while(x!=0)
    {
    	arr.push(x%10)
    	x = Number.parseInt(x/10)
    }
    let coefficient = 0
    let value = 0
    while(arr.length>0)
    {
    	value+=(arr.pop()*Math.pow(10,coefficient))
    	coefficient++
    }
    if(value<-Math.pow(2,31)||value>(Math.pow(2,31)-1)) return 0
    return value
};
console.log(reverse(1534236469))