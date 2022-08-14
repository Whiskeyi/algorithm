/* 给你一份工作时间表 hours，上面记录着某一位员工每天的工作小时数。

我们认为当员工一天中的工作小时数小于等于 8 小时的时候，这一天就是【正常工作】的一天，否则为【劳累工作】的一天。

我们定义【员工疲劳时间段】，意味在这段时间内，【正常工作】天数是严格小于【劳累工作】天数。

为追求工作生活平衡（WLB），保障员工身体健康和心情愉悦，编写算法输出【员工疲劳时间段】的最大长度。 */

const hours=[9,9,6,0,6,6,9];

function longestWPI(hours) {
    // 滑动窗口
    let normal = 0;
    let extra = 0;
    let k = true;
    let max = 0;
    for (let i = 0; i < hours.length - 1; i++) {
        for (let j = i; j < hours.length; j++) {
            while(extra > normal + 1 || k) {
                k = false;
                if (hours[j] >= 8) {
                    extra++;
                    j++;
                } else {
                    normal++;
                    j++;
                }
            }
        }
        max = Math.max(max, extra + normal);
        extra = 0;
        normal = 0;
    }
    return max;
}

console.log(longestWPI(hours));