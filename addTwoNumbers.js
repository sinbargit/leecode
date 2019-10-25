/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
var addTwoNumbers = function(l1, l2) {
    var arr = [];
    var arr1 = [];
    var arr2 = [];
    while(l1!=null||l2!=null)
        {
            if(l1!=null){
                arr1.push(l1.val);
                l1 = l1.next;
            }
            if(l2!=null){
                arr2.push(l2.val);
                l2 = l2.next;
            }
            
        }
    var l = arr1.length>arr2.length?arr1.length:arr2.length
    for(var i=0;i<l;i++)
        {
            var a = arr1[i]==null?0:arr1[i]
            var b = arr2[i]==null?0:arr2[i]
            arr[i]=arr[i]||0;
            arr[i] = arr[i]+a+b;
            if(arr[i]>9)
                {
                    arr[i]= arr[i] - 10;
                    arr[i+1] = 1;
                }
        }
	var temp = null;
	var r = null
	for(n of arr)
	{
		if(temp == null)
		{
			temp = new ListNode(n) 
			r = temp;
		}
		else
		{
			temp.next = new ListNode(n) 
			temp = temp.next
		}
	}
    return r 
};
st
