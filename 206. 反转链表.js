/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 方法一：双指针法
function ReverseList(pHead)
{
    let curr = pHead;
    let prev = null;
    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}
module.exports = {
    ReverseList : ReverseList
};

// 方法二：递归法
function reverse(prev, head) {
    if(!head) return prev;
    let temp = head.next;
    head.next = prev;
    prev = head;
    return reverse(prev, temp);
}

function ReverseList(pHead)
{
    return reverse(null, pHead);
}

module.exports = {
    ReverseList : ReverseList
};
