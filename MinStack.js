/**
 * initialize your data structure here.
 */
var MinStack = function() {
	this.stack = [];   
	this.min = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
	if(this.min === null) {
		this.min = x;
		this.stack.push(x)
		this.stack.push(x)
	}else
	{
		if(this.min >= x)
		{
			this.stack.push(this.min)	
	 		this.stack.push(x)
			this.min = x
		}
		else{
			this.stack.push(x)
		}
	}

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	if(this.min === this.top())
	{
		this.stack.pop();
		this.min = this.stack.pop();
	}
	else{
		this.stack.pop();	
	}
	if(this.stack.length===0)
	{
		this.min = null;
	}
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this.stack[this.stack.length-1] 
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
	return this.min 
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
 var temp = new MinStack()
