/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 // 假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素
 // 双指针
 var twoSum = function(numbers, target) {
    for(i = 0, j = numbers.length - 1; i < j;) {
        if(numbers[i] + numbers[j] < target) {
            i++;
        }else if(numbers[i] + numbers[j] > target) {
            j--;
        }else return [i + 1, j + 1];
    }
    return [-1, -1];
};