/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pHead ListNode类
 * @param k int整型
 * @return ListNode类
 */
 function FindKthToTail( pHead ,  k ) {
    // write code here
   let len = 1;
    let head = pHead;
    let curr = 1;
    while(head) {
        len++;
        head = head.next;
    }
    while(pHead) {
        curr++;
        if(curr === len - k + 1) return pHead;
        pHead = pHead.next;
    }
}
module.exports = {
    FindKthToTail : FindKthToTail
};