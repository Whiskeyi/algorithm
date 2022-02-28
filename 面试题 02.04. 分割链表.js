/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    let smallNode = new ListNode(0);
    let largeNode = new ListNode(0);
    let smallHead = smallNode;
    let largeHead = largeNode;
    while(head) {
        if(head.val >= x) {
            largeNode.next = head;
            largeNode = largeNode.next;
        } else {
            smallNode.next = head;
            smallNode = smallNode.next;
        }
        head = head.next;
    }
    smallNode.next = largeHead.next;
    largeNode.next = null;
    return smallHead.next;
};