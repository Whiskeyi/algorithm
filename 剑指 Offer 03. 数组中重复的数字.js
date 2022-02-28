/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    const map = new Map();
    for(num of nums) {
        map.set(num, map.get(num) + 1 || 1)
    }
    return [...map].filter(item => item[1] >= 2)[0][0];
};

// map2

var findRepeatNumber = function(nums) {
    let map = new Map();
    for(let i of nums){
        if(map.has(i)) return i;
        map.set(i, 1);
    }
    return null;
};