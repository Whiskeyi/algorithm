let nums = [2,4,1,2,7,8,4];
function findPeakElement( nums ) {
    // write code here
    let sum = 0;
    for(let i = 1; i < nums.length - 1; i++) {
        if(nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
            sum++;
            i++;
        }
    }
    return sum;
}
console.log(findPeakElement(nums));