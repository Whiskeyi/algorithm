    let [a, b, c] = ['flower', 'flow', 'flight'];
    let minLen = Math.min(a.length, b.length, c.length);
    let saveLen = 0;
    for(let i = 0; i < minLen; i++) {
        if(a[i] === b[i] && b[i] === c[i]) {
            saveLen++;
        }else break;
    }
    console.log(a.slice(0, saveLen));