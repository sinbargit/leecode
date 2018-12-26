/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    
    var i=1;
    var r = 0
    num2 = num2*1
    var num = num1*1;
    num1 = 0
    while(i<=num2)
        {
            num1=plus(num1,num)
            i++
        }
    
    return num1+''
};
function plus(x,y)
{
    var arr = [];
    arr1 = (x+'').split('').reverse()
    arr2 = (y+'').split('').reverse()
    var l = arr1.length>arr2.length?arr1.length:arr2.length
    for(var i=0;i<l;i++)
        {
            var a = isNaN(arr1[i])?0:parseInt(arr1[i])
            var b = isNaN(arr2[i])?0:parseInt(arr2[i])
            arr[i]=arr[i]||0;
            arr[i] = arr[i]+a+b;
            if(arr[i]>9)
                {
                    arr[i]= arr[i] - 10;
                    arr[i+1] = 1;
                }
        }
    return arr.reverse().join('')*1
}
function toArray(num)
{
    var arr = []
    for(var i=num.length-1;i>=0;i--)
        {
            arr.push(num.slice(i,i+1)*1)
        }
    return arr;
}
console.log(multiply('123456789','7654321'))