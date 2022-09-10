let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let N=parseInt(readLine());
if(N>0){
for(let i=1;i<=N;i++){
  if(i%3==0 && i%5!=0){
    console.log("Fizz");
  }else if(i%5==0 && i%3!=0){
    console.log("Buzz");
  }else if(i%3==0 && i%5==0){
    console.log("FizzBuzz");
  }else{
    console.log(i);
  }
}
}else{
  console.log("Invalid Number!!")
}