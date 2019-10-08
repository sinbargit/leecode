/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var temp = digits.reverse();
    var arr = new Array(digits.length+1);
    arr.fill(0)
    var i=0
    arr[0] = 1
    while(i<temp.length)
    {
        console.log(arr[i])
        arr[i] = arr[i] + temp[i];
        arr[i] >9?(arr[i+1]++,arr[i]=arr[i]%10):''
        i++
    }
    arr[arr.length-1] ===0?arr.pop():''
    arr = arr.reverse();
    return arr;
};
console.log(plusOne([1,2,3,9]))
