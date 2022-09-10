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
// let Curr_max=-1;
// let arr1=[-1];
// for(let i=arr.length-1;i>0;i--){
//   if(Curr_max<arr[i]){
//     Curr_max=arr[i];
//     arr1.unshift(Curr_max);
//   }else{
//     arr1.unshift(Curr_max);
//   }
// }
// return arr1;
let arr1=[]
 arr1[arr.length-1]=-1;
 for(let i=arr.length-2;i>=0;i--){
  arr1[i]=Math.max(arr1[i+1],arr[i+1]);
 }
 return arr1;
}

// Do not edit anything below
let numElems = parseInt(readLine());
let arr = [];
for (let index=0;index<numElems;index++){
        arr.push(parseInt(readLine()));
}
let res=replaceElements(arr);
for(let i=0;i<res.length;i++){
  console.log(res[i]);
}