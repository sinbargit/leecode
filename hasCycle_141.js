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
var hasCycle = function (head) {
    if (!head || !head.next || !head.next.next) {
        return false;
    }
    let i = head;
    let j = head;
    while (j.next && j.next.next) {
        i = i.next;
        j = j.next.next;
        if (i === j) {
            return true;
        }
    }
    return false;
};
