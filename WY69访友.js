/* 描述
小易准备去拜访他的朋友，他的家在0点，但是他的朋友的家在x点(x > 0)，均在一条坐标轴上。小易每一次可以向前走1，2，3，4或者5步。问小易最少走多少次可以到达他的朋友的家。
输入描述：
一行包含一个数字x(1 <= x <= 1000000)，代表朋友家的位置。
输出描述：
一个整数，最少的步数。 */
let target = parseInt(readline());
let step = 0;
if(target > 5) {
    step += Math.ceil(target / 5);
}else step = 1;
print(step);