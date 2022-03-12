/* 帮帮同学在设计一个文字碰碰消游戏，规定"五"和"八"形成"五八"组合碰到一起即会消除，("八五" 不会消除)。
例如 "五八", "五八五八", "五五八八"。说明: "五五八八" 是内层的"五八"碰在一起消除后，外层的"五八"会碰在一起消除。
帮帮同学想知道n个"五"和"八"组成的字符串中，有多少种组合可以满足消除为空字符串。
现为帮帮同学设计一个方法，输入整数n，表示"五"和"八"的数量，返回n个"五"和n个"八"组成的字符串中，满足消除为空字符串的组合数 */

function getTargetNumber(n) {
    // write code here
    let res = 0;
    function fun(init, go) {
        if(init < 0) return
        if(go > 2 * n) return
        if(go === 2 * n ) {
            if(init === 0)res++
        }
        go += 1
        fun(init + 1, go)
        fun(init - 1, go)
    }
    fun(0, 0);
    returnres;
}
module.exports = {
    getTargetNumber : getTargetNumber
};