/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
	if(!head||!head.next) return head;
	var odd = head
	var even = head.next
	var _even = even
	while(even.next&&odd.next)
	{
		odd.next = even.next;
        (odd.next)&&(odd = odd.next);
		even.next = odd.next;
		(even.next)&&(even = even.next);
        console.log(odd.val,'--',even.val)
	}
	even.next = null;
	odd.next = _even

	return head;
};
