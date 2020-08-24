//mini heap 构造一个小顶堆
function Heap(k) {
    this.arr = new Array();
    this.l = k;
}

Heap.prototype.swap = function (i, j) {
    this.arr[i] = this.arr[i] ^ this.arr[j];
    this.arr[j] = this.arr[i] ^ this.arr[j];
    this.arr[i] = this.arr[i] ^ this.arr[j];
};
Heap.prototype.less = function (i, j) {
    return this.arr[i] < this.arr[j];
};
Heap.prototype.add = function (v) {
    this.arr.push(v);
    this.swim(this.arr.length - 1);
};
Heap.prototype.swim = function (k) {
    while (k > 0 && this.less(k, parseInt((k - 1) / 2))) {
        this.swap(parseInt((k - 1) / 2), k);
        k = parseInt((k - 1) / 2);
    }
};
Heap.prototype.sink = function (k) {
    while (2 * k + 1 < this.arr.length) {
        let j = 2 * k + 1;
        if (this.less(j + 1, j)) j++;
        if (this.less(k, j)) break;
        this.swap(j, k);
        k = j;
    }
};
Heap.prototype.del = function () {
    this.swap(0, this.arr.length - 1);
    const temp = this.arr.pop();
    this.sink(0);
    return temp;
};
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this.heap = new Heap(k);
    for (let i = 0; i < nums.length; i++) {
        this.heap.add(nums[i]);
        if (this.heap.arr.length === k + 1) {
            this.heap.del();
        }
    }
    this.r = this.heap.arr[0];
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.heap.add(val);
    if (this.heap.arr.length === this.k + 1) {
        this.heap.del();
    }
    this.r = this.heap.arr[0];
    return this.r;
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
