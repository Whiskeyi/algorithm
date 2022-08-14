class Solution {
    /* Write Code Here */
    containsNearbyDuplic(nums, k) {
      let map = new Map();
      for(let i = 0; i < nums.length; i++) {
          if(map.get(nums[i]) !== undefined && i - map.get(nums[i]) <= k) {
              return 'true';
          }
          map.set(nums[i], i);
      }
      return 'false';
    }
}
let res;

let nums_size = readInt();

let nums = new Array();
let nums_item;
for(let nums_i = 0; nums_i < nums_size; nums_i++) {
    nums.push(readInt());
}
let k = readInt();
let acmSolution = new Solution();
res = acmSolution.containsNearbyDuplic(nums, k);
// res = res ? 1 : 0;
print(res);