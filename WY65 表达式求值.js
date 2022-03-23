let nums = readline().split(' ').map(Number);
nums.sort((a, b) => a - b);
if(nums[0] <= 1) print((nums[0] + nums[1]) * nums[2]);
else print(nums[0] * nums[1] * nums[2]);
