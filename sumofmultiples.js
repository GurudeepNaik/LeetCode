let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

//Write  your function here
function sumOfMultiples(numbers, mult) {
  let N=0;
  for (let i = 0; i < numbers.length; i++) {
   if((numbers[i]%mult)==0){
     N=N+numbers[i];
   }
  } return N;
}


// DO NOT CHANGE ANYTHING BELOW THIS LINE
let range = parseInt(readLine());
let numbers = [];
for (let each = 0; each < range; each++) {
  numbers.push(parseInt(readLine()));
}
let mult = parseInt(readLine());
console.log(sumOfMultiples(numbers, mult));

