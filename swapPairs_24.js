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
var swapPairs = function(head) {
    let cur = head
    let next = cur.next
    let prev = null
    while (next)
    {
        cur.next = next.next
        next.next = cur
        if(prev)
        {
            prev.next = next
        }
        const temp = cur
        cur = cur.next
        next = cur&&cur.next
        prev = temp
    }
    return head.next
};