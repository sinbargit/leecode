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
var swapPairs = function (head) {
    let prev = new ListNode();
    prev.next = head;
    let r = head && head.next || head
    while (prev.next && prev.next.next) {
        let temp = prev.next;
        prev.next = prev.next.next;
        temp.next = prev.next.next;
        prev.next.next = temp;
        prev = temp;
    }
    return r;
};
