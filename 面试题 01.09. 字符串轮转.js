/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var isFlipedString = function(s1, s2) {
    let s = "";
    let k = 0;
    if(s1.length != s2.length) {
        return false;
    }else if(s1 == "" && s2 == "") return true
    else {
        for(i = 0; i < s1.length; i++) {
            s = s1.slice(i, s1.length) + s1.slice(0, i);
            if(s == s2) {
                k = 1;
            }
        }
        if(k == 1) return true;
        else return false;
    }
};
// s1 = "", s2 = ""
// let s = "";
// let k = 0;
// if(s1.length != s2.length) {
//     console.log(false);
// }else if(s1 == "" && s2 == "") console.log(true)
// else {
//     for(i = 0; i < s1.length; i++) {
//         s = s1.slice(i, s1.length) + s1.slice(0, i);
//         if(s == s2) {
//             k = 1;
//         }
//     }
//     if(k == 1) console.log(true);
//     else console.log(false);
// }