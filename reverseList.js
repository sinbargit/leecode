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
var reverseList = function (head) {
    while (head.next) {
        head.next.prev = head;
        head = head.next
    }
    var start = head;
    while(head.prev)
    {
        head.next = head.prev;
        head = head.next;
    }
    return start;
};
