/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var i = 0, j = 0;
    while (j < nums.length) {
        if (nums[j] === 0) {
            j++;
            continue;
        } else {
            nums[i] = nums[j];
            i++
        }
        j++
    }
    for(var k = i;k<nums.length;k++){
        nums[k] = 0;
    }
    return nums;
};
console.log(moveZeroes([0,1,0,3,12]))
