var myAtoi = function(str) {
    var reg = new RegExp('^ *(?:\\-||\\+)?\\d+')
    var nums = str.match(reg);
    if(nums===null)
    {
    	return 0
    }
    else
    {
    	var num = nums[0]
    	if(num<-Math.pow(2,31))
    	{
    		return -Math.pow(2,31)
    	}
    	else if(num>(Math.pow(2,31)-1))
    	{
    		return Math.pow(2,31)-1
    	}
    }

    return num.replace('+','')
};
console.log(myAtoi('4193 with words'))