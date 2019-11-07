/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
	//使用堆构造优先队列   
	var queue = function(){
		this.q = ['']
	};


	queue.prototype.add = function (v){
		this.q[this.q.length] = v;
		this.up();	
	}
	queue.prototype.up = function(){
		var k = this.q.length - 1;
		while(k>=2&&this.q[k]>this.q[parseInt(k/2)]){
			var temp = this.q[k]
			this.q[k] = this.q[parseInt(k/2)]
			this.q[parseInt(k/2)] = temp;
			k = parseInt(k/2)
		}
	}
	queue.prototype.down = function(){
		var k = 1;
		while(2*k<this.q.length-1)	
		{
			var v = this.q[2*k]>this.q[2*k+1]?2*k:(2*k+1)
			if(this.q[v]>this.q[k])
			{
				var temp = this.q[k]
				this.q[k] = this.q[v]
				this.q[v] = temp;
				k = v;
			}
			else{
				break;
			}
		}
	}
	queue.prototype.get = function(k)
	{
		var i = 0;
		var temp = [];
		while(i<k)
		{
			temp.push(this.q[1]);		
			this.q[1] = this.q[this.q.length-1]
			this.q[this.q.length-1] = null;
			this.down();
			i++
		}
		return temp;
	}
	var map  = new Map();
	for(var i=0;i<nums.length;i++)
	{
		var temp = map.get(nums[i]);
		if(temp)
		{
			map.set(nums[i],temp+1)	
		}
		else{
			map.set(nums[i],1)
		}
	}
	var qu = new queue();
	for(var v of map.values())
	{
		qu.add(v)	
	}
	var mapVK = new Map();
	for(var key of map.keys())
	{
		var value = map.get(key);
		if(!mapVK.get(value))
		{
			mapVK.set(value,[key])
		}
		else{
			mapVK.get(value).push(key)
		}
	}
	var max =  qu.get(k)
	var r = [];
	for(var i=0;i<max.length;i++)
	{
		if(i>0&&max[i]==max[i-1]) continue;
		r=r.concat(mapVK.get(max[i]))
	}
	return r.slice(0,k)
};
console.log(topKFrequent([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6],10))
