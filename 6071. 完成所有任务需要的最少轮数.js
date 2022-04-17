/**
 * @param {number[]} tasks
 * @return {number}
 */
 var minimumRounds = function(tasks) {
    const map = new Map();
    for(let num of tasks) {
        map.set(num, map.get(num) + 1 || 1);
    }
    if([...map.values()].includes(1)) return -1;
    let sum = 0;
    function getSum(item) {
        if(item % 3 !== 0) sum++;
        sum += Math.floor(item / 3);
    }
    [...map.values()].forEach(getSum);
    return sum;
};