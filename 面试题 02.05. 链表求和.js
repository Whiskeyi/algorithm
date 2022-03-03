/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let rzNode = new ListNode(0);
    let L1 = '';
    let L2 = '';
    let sum = 0;
    let rz = '';
    let curr = rzNode;
    while(l1) {
        L1 += l1.val;
        l1 = l1.next;
    }
    while(l2) {
        L2 += l2.val;
        l2 = l2.next;
    }
    sum = parseInt([...L1].reverse().join('')) + parseInt([...L2].reverse().join(''));
    rz = [...sum.toString()].reverse().join('');
    for(i = 0; i < rz.length; i++) {
        let newNode = new ListNode(parseInt(rz[i]));
        curr.next = newNode;
        curr = curr.next;
    }
    return rzNode.next;
};


// 方法二
var addTwoNumbers = function (l1, l2) {
    let result = new ListNode(0)
    let p = result
    let p1 = l1
    let p2 = l2

    let carry = 0
    while (p1 || p2) {
        let p1Val = p1 ? p1.val : 0
        let p2Val = p2 ? p2.val : 0
        let sum = p1Val + p2Val + carry
        carry = Math.floor(sum / 10)
        p.next = new ListNode(sum % 10)
        p = p.next
        if (p1) p1 = p1.next
        if (p2) p2 = p2.next
    }

    if (carry) p.next = new ListNode(carry)
    return result.next
}