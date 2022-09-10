let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let N=parseInt(readLine());
let matrix=[];
for(let i=0;i<N;i++){
  let rows=readLine().split(" ");
  matrix.push(rows);
}
let Matrix2=[];
for(let i=0;i<matrix[0].length;i++){
 let arr=[];
  for(let j=matrix.length-1;j>=0;j--){
    
   arr.push(matrix[j][i]);
  }
  Matrix2.push(arr);
}
console.log(Matrix2.length);
for(let i=0;i<Matrix2.length;i++){
  console.log(Matrix2[i].join(" "));
}
