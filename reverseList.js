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
    while (head&&head.next) {
        head.next.prev = head;
        head = head.next
    }
    var start = head;
    while(head&&head.prev)
    {
        head.next = head.prev;
        head = head.next;
    }
	head&&(head.next = null)
    return start;
};

// 第二种做法
var reverseList2 = function (head) {
    let prev = null;
    let cur = head;
    while(cur)
    {
        const tempNext = cur.next
        cur.next = prev
        prev = cur
        cur = tempNext
    }
    return prev
}