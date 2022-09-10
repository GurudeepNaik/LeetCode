let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let angleA=parseInt(readLine());
let angleB=parseInt(readLine());
let angleC=180-angleA-angleB;
console.log(angleC);