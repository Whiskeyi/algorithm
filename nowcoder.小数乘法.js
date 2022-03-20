// 需要注意js结果精度的问题，以下方法对于双小数不适用
function multiply(a, b) {
    // 先把a,b两个数字都变成字符串
   var stra = "" + a;
   var strb = b.toString();
   //获取小数位数
   // indexOf('.')==-1  就是说明这个字符串中没有点，也就是没有小数
   //stra.length -stra.indexOf('.')-1   的意思是用stra字符串的长度减去找到点的位置的索引再减去1（因为length会比index大1）就是小数点后面的长度
   var lena = (stra.indexOf('.') == -1) ? 0 : (stra.length - stra.indexOf('.') - 1);
   var lenb = (strb.indexOf('.') == -1) ? 0 : (strb.length - strb.indexOf('.') - 1);
   // 通过Math的max方法求这两个里面哪个的小数点后面的位数更长，因为根据示例，保留的是长度更长的那一个数字后面的位数
   var len = Math.max(lena, lenb);
   // 通过parseFloat将字符串转换为浮点型数字，再通过toFixed决定保留小数位的长度
   var result = parseFloat(a * b).toFixed(len);
   return result
}