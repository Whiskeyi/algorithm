// 错误，复杂
/* let questions =[[1,1],[2,2],[3,3],[4,4],[5,5]];
 var mostPoints = function(questions) {
    let dp = new Array(questions.length);
    dp[0] = questions[0][0];
    if(questions.length >= 2) {
        dp[1] = Math.max(dp[0], questions[1][0])
    }else return dp[0];
    for(let i = 2; i < questions.length; i++) {
        if(questions[i][0] > dp[i - 1]) {
            dp[i] = questions[i][0];
            continue;
        }
        let k = i - 1;
        while(k >= 0) {
            if(k + questions[k][1] < i) {
                dp[i] = Math.max((questions[k][0] + questions[i][0]), dp[i - 1]);
                break;
            }
            k--;
        }
        if(k < 0) dp[i] = dp[i - 1];
    }
    return dp[questions.length - 1];
};
console.log(mostPoints(questions)) */

var mostPoints = function(questions) {
    let len = questions.length;
    let dp = new Array(questions.length).fill(0);
    dp[len - 1] = questions[len - 1][0];
    for (let i = len - 2; i >= 0; i--) {
        dp[i] = Math.max(dp[i + 1], questions[i][0] + (dp[i + questions[i][1] + 1] || 0))
    }
    return dp[0]
};