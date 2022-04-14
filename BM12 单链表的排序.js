/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类 the head node
 * @return ListNode类
 */
 function sortInList( head ) {
    // write code here
    let arr = [];
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
    arr = arr.sort((a, b) => a - b);
    let rz = new ListNode(arr), t = rz;
    for(let num of arr) {
        t.next = new ListNode(num);
        t = t.next;
    }
    return rz.next;
}
module.exports = {
    sortInList : sortInList
};