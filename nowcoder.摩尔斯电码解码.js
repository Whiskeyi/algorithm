function getSolveCount(str) {
    const dp = Array(str.length + 1);
    dp[0] = 1;
    dp[1] = 1;
    const MAX_VALUE = 2147483647 + 1;
    for (var i = 2; i < dp.length; i++) {
        dp[i] = dp[i - 1];
        dp[i] = dp[i] % MAX_VALUE;
        if (str[i - 2] !== "0") {
            dp[i] += dp[i - 2];
            dp[i] = dp[i] % MAX_VALUE;
        }
        if (i >= 3 && str[i - 3] !== "0") {
            dp[i] += dp[i - 3];
            dp[i] = dp[i] % MAX_VALUE;
        }
    }
    return dp[str.length];
}

const str = '1101'
// const str = readline();
const res = getSolveCount(str);
console.log(res);

// public class Main {
//     public static void main(String[] args) throws IOException {
//         BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
//         char[] str=br.readLine().toCharArray();
//         int n=str.length;
//         int[] dp=new int[n+1];
//         dp[0]=1;
//         dp[1]=1;
//         for(int i=2;i<=n;i++)
//         {
//             dp[i]=dp[i-1];//一位
//             if(i-2<=n && str[i-2]=='1') dp[i]+=dp[i-2];//两位
//             if(i-3<=n && str[i-3]=='1') dp[i]+=dp[i-3];//三位
//         }
//         System.out.println(dp[n]);
//     }
// }