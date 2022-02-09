/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
 var oneEditAway = function(first, second) {
    if(first == second) { // 字符串相同，0次
        return true;
    } else {
        if(first.length == second.length) { // 替换
            let s = 0;
            for(i = 0; i <= first.length - 1; i++) {
                if(first[i] == second[i]) s += 1;
            }
            if(s == first.length - 1) {
                return true;
            }else return false;
        }else if(first.length - 1 == second.length) { // 删除
            for(i = 0; i <= first.length; i++) {
                if(first[i] != second[i]) {
                    rz = first.slice(0, i) + first.slice(i + 1, first.length);
                    break;
                }
            }
            if(rz == second) {return true}else return false;
        }else if(first.length == second.length - 1) { // 插入
            for(i = 0; i <= second.length; i++) {
                if(first[i] != second[i]) {
                    rz = second.slice(0, i) + second.slice(i + 1, second.length);
                    break;
                }
            }
            if(rz == first) {return true}else return false;
        }else return false;
    }
};

    // const first = "ple";
    // const second = "pale";
    // var rz = "";
    // if(first == second) { // 字符串相同，0次
    //     console.log(true);
    // } else {
    //     if(first.length == second.length) { // 替换
    //         let s = 0;
    //         for(i = 0; i <= first.length - 1; i++) {
    //             if(first[i] == second[i]) s += 1;
    //         }
    //         if(s == first.length - 1) {
    //             console.log(true);
    //         }else console.log(false);
    //     }else if(first.length - 1 == second.length) { // 删除
    //         for(i = 0; i <= first.length; i++) {
    //             if(first[i] != second[i]) {
    //                 rz = first.slice(0, i) + first.slice(i + 1, first.length);
    //                 break;
    //             }
    //         }
    //         if(rz == second) {console.log(true);}else console.log(false)
    //     }else if(first.length == second.length - 1) { // 插入
    //         for(i = 0; i <= second.length; i++) {
    //             if(first[i] != second[i]) {
    //                 rz = second.slice(0, i) + second.slice(i + 1, second.length);
    //                 break;
    //             }
    //         }
    //         if(rz == first) {console.log(true);}else console.log(false)
    //     }else console.log(false)
    // }