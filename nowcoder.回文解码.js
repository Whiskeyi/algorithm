var line = readline();
var n = readline();

for(var i=0;i<n;i++){
    var line2 = readline().split(' ');
    var start = parseInt(line2[0]);
    var len = parseInt(line2[1]);
    var temp = line.substr(start,len).split('').reverse().join('');
    line = line.slice(0,start+len) + temp + line.slice(start+len);
}
print(line);
