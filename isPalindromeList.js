/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head){
	if(!head||!head.next)
	{
		return true;
	}
	var first = head;
	while(head.next)
	{
		head.next.prev = head;	
		head = head.next
	}
	var last = head
	while(first)
	{
		if(first.val!==last.val)
		{
			return false
		}
		first = first.next;
		last = last.prev;
	}
	return true;
}
