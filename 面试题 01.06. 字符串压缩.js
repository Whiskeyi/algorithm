/**
 * @param {string} S
 * @return {string}
 */
 var compressString = function(S) {
    let k = "";
    let rz = ""
    let sum = 0;
    for(let i = 0; i <= S.length; i++) {
        for(let j = i; j <= S.length; j++){
            k = S[i];
            if(k == S[j]) { sum += 1} else {
                rz = rz + k + sum.toString();
                sum = 0;
                i = j - 1;
                break;
            };
        }
    }
    if(rz.length >= S.length) return S;
    else return rz;
};

// const S = "abbccd";
// let k = "";
// let rz = ""
// let sum = 0;
// for(let i = 0; i <= S.length; i++) {
//     for(let j = i; j <= S.length; j++){
//         k = S[i];
//         if(k == S[j]) { sum += 1} else {
//             if(sum == 1) rz = rz + k;
//             else rz = rz + k + sum.toString();
//             sum = 0;
//             i = j - 1;
//             break;
//         };
//     }
// }
// if(S.length == rz.length) console.log(S);
//     else console.log(rz);