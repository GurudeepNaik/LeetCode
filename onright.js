let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function replaceElements(arr){
    // Implement this function   
    let arr1=[-1];
    let Max=Number.NEGATIVE_INFINITY;
    for(let i=arr.length-1;i>0;i--){
      Max=Math.max(Max,arr[i]);
      arr1.push(Max);
    } 
    arr1.reverse()
    return arr1;
}

// Do not edit anything below
let numElems = parseInt(readLine());
let arr = [];
for (let index=0;index<numElems;index++){
        arr.push(parseInt(readLine()));
}
let res=replaceElements(arr);
for(elem of res){
  console.log(elem);
}