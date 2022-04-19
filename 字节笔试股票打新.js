let line1 = readline().split(' ').map(Number); // ['170074784','21']
let saveNum = line1[0]; // (save)new
let lineNext = readline(); // '4 4796'
let key = 0;
let rz = [];
while(lineNext !== 'END') {
    let lineNumber = lineNext.split(' '); // ['4','4796']
    lineNumber.shift();
    // let numberLen = parseInt(lineNumber.shift()); // 4
    for(let i = 0; i <= line1[1]; i++) {
        lineNumber.forEach((item) => {
            if(line1[0].toString().endsWith(item)) {
                key = 1;
                rz.push(line1[0]);
            }
        })
        line1[0] = parseInt(line1[0]) + 1;
    }
    line1[0] = saveNum; // (init)new
    lineNext = readline();
}
if(key === 0) print('NO')
else {
    print('YES');
    while(rz.length) {
        let s = rz.shift();
        print(s);
    }
}