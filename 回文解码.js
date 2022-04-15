var line1 = readline();
var n = readline();
for(var i = 0; i < parseInt(n); i++){
    var line2 = readline().split(' ');
    var start = parseInt(line2[0]);
    var len = parseInt(line2[1]);
    var temp = line1.substr(start, len).split('').reverse().join('');
    line1 = line1.slice(0, start + len) + temp + line1.slice(start + len);
}
print(line1);