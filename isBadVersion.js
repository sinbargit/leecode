/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
 		var l = 1;
		function find(l,h){
			var m = parseInt((l+h)/2)
			if(isBadVersion(m))
			{
				if(m-1<=0)
				{
					return m;
				}
				if(!isBadVersion(m-1))
				return m;	
				return find(l,m);
			}
			else{
				return find(m+1,h)
			}
		}       
		return find(l,n);
    };
};
