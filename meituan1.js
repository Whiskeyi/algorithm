// let n = Number(read_line());
// let A = read_line();
// let B = read_line();
const n = 4;
const A = "abcd"
const B = "efgh"

function toRz(n, A, B) {
    let rz = [];
    let a = A.split("");
    let b = B.split("");
    while (n) {
        rz.push(a.shift());
        rz.push(b.shift());
        n--;
    }
    return rz.join("");
}

console.log(toRz(n, A, B));