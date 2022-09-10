let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
let N = parseInt(readLine());
var arr=[];
for (let i = 0; i < N; i++) {
    let i = parseInt(readLine());
    arr.push(i);
}
for(let i=0;i>arr.length;i=i+2){
   var Y= arr[i]-arr[i+1];
   Y=Y+arr[i+2];
   console.log(Y);
}