var i = 0;
var timeS = setInterval(() => {
    i++;
    console.log(i);
    if(i === 60) {
        clearInterval(timeS);
        console.log('time out!')
    }
}, 1000)