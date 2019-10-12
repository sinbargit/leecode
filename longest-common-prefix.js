var longestCommonPrefix = function(strs) {
    if(strs.length==0)return "";
    var common = strs[0]
    for(var i=1;i<strs.length;i++)
    {
    	common = process(common,strs[i])
    }
    function process(com,ele)
    {
    	var i=0
	var str = '';
	while(com.charAt(i)!=""&&ele.charAt(i)!="")
	{
		if(com.charAt(i)===ele.charAt(i))
		{
			str+=com.charAt(i)
		}
		else
		{
			break;
		}
		i++
	}
	
	return str;
    }
    return common;
};
console.log(longestCommonPrefix(["aca","cba"]) )

//reduce version

var longestCommonPrefix = function(strs) {
	if(strs.length==0)return "";
	var common = strs[0]

	return	strs.reduce((acc,cur)=>{
		return process(acc,cur);	
	})
	function process(com,ele)
	{
		var i=0
		var str = '';
		while(com.charAt(i)!=""&&ele.charAt(i)!="")
		{
			if(com.charAt(i)===ele.charAt(i))
			{
				str+=com.charAt(i)
			}
			else
			{
				break;
			}
			i++
		}

		return str;
	}
}
