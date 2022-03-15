let nums = [-2,1,-3,4,-1,2,1,-5,4];
var saveMax;
for(let i = 0; i < nums.length; i++) {
    let max = nums[i];
    for(let j = i + 1; j < nums.length;) {
        if(nums[j] > 0) {
            max += nums[j];
            j++;
        }else break;
    }
    if(max > saveMax) saveMax = max;
}
console.log(saveMax);