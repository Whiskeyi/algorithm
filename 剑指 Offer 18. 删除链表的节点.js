/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
    let prev = null;
    let curr = head;
    if(head.val === val) return head.next;
    while(curr) {
        if(prev && curr.val === val) {
            prev.next = curr.next;
        }
        prev = curr;
        curr = curr.next;
    }
    return head;
};