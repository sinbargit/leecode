/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val) {
      this.val = val;
      this.next = null;
  }
var removeNthFromEnd = function(head, n) {
    
        var first = new ListNode(null);
        var second =  new ListNode(null);
        var real =  new ListNode(null);
        first.next = head;
        second.next = head;
        real=second;
        var count = 0;
        while((count<n+1)&&(first!=null))
        {
                first = first.next;
                count++;
        }
        while(first != null)
        {
                second = second.next;
                first = first.next;

        }
        second.next = second.next.next
        return real.next;
}
