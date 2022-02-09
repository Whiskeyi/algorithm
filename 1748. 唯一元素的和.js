/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    const map = new Map();
    for(const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    let sum = 0;
    let rs = [...map].filter(item => item[1] == 1);
    if(rs.length == 0) { return 0 } else {
    rs.forEach((val) => sum += val[0])
    return sum}
};

// nums = [1,2,3,4,5];
// const map = new Map();

// for(const num of nums) {
//     map.set(num, (map.get(num) || 0) + 1)
// }
// console.log(map);
// var sum = 0;
// var rs = [...map].filter(item => item[1] == 1 & 1);
// console.log(rs);
// if(rs.length == 0) { console.log(0) } else {
//     rs.forEach((val) => sum += val[0])
//     console.log(sum) }
