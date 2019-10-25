/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function size(head)
{
	var i =0;
	while(head)
	{
		i++;
		head = head.next;
	}
}
var getIntersectionNode = function(headA, headB) { 
	var sub = Math.abs(size(headA)-size(headB));
	if(size(headA)>size(headB))
	{
		while(sub>0)
		{
			headA = headA.next	
			sub--
		}
	}
	else
	{
		while(sub>0)
		{
			headB = headB.next;
			sub--
		}
	}
	while(headA)
	{
		if(headA===headB)
		{
			return headA
		}
		headA = headA.next
		headB = headB.next
	}
		
	return null;
};
