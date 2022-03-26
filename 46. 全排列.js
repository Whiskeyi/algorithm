/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const res = [], path = [];
    backtracking(nums, nums.length, []);
    return res;
    function backtracking(n, k, used) {
        if(path.length === k) {
            res.push(Array.from(path));
            return;
        }
        for (let i = 0; i < k; i++ ) {
            if(used[i]) continue;
            path.push(n[i]);
            used[i] = true; // 同支
            backtracking(n, k, used);
            path.pop();
            used[i] = false;
        }
    }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let len = nums.length, result = [], visited = new Array(len).fill(false);

    const dfs = (nums, len, depth, path, visited) => {
        // 遍历到叶子结点了，可以返回了
        if(depth === len) {
            result.push([...path]);
        }

        for(let i = 0; i < len; i++) {
            // 如果没遍历过
            if(!visited[i]) {
                // 压入 path 数组，然后是否遍历过的数组此下标处变为 true
                path.push(nums[i]);
                visited[i] = true;
                // 继续 dfs，直到最后一层
                dfs(nums, len, depth + 1, path, visited);
                // 进行回溯，还原，以便下一次使用
                visited[i] = false;
                path.pop();
            }
        }
    }

    dfs(nums, len, 0, [], visited);
    return result;
};