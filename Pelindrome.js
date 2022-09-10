// function Pelindrome(N){
//   if(typeof(N)=="number"){
//     N=N.toString();
//   }
//   let left=0;
//   let right=N.length-1;
//   let isPelindrome=true;
//   while(left<right){
//      if(N[left]!=N[right]){
//        isPelindrome=false;
//        break;
//      }
//      left++;
//      right--;
//   }
//   return isPelindrome;
// }
// let N="abcdcba";
// console.log(Pelindrome(N));
// // console.log(typeof(N));

// function mathOperator(X,Y,Z){
//  if(Z==="+") {
//    return X+Y;
//  }else if(Z==="*"){
//   return X*Y;
//  }else if(Z==="-"){
//   return X-Y;
//  }else if(Z==="/"){
//   return X/Y;
//  }
// }
// console.log(mathOperator(30,40,"-"));

//Array Methods

//1.ForEach()
//This method helps to loops over each item in an array
//retuns each elements
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.forEach(element => {
//   console.log(element*2);
// });

//2.includes()
//This method checks if array includes the item passes in the method
//retuns boolean value
// console.log(arr.includes(3));

//3.Filter()
//This method makes another array which has passed the condition given
//in method it wont change anything in the array ;
//returns Array;
// let arrFilter=arr.filter(num =>num%2==0);
// console.log(arrFilter);

//4.Map()
//this method creats another array by calling the function in every
//element of old array;
//returns new array of same length;
// let arrMap=arr.map(num => num*3);
// console.log(arrMap);

//5.Reduce()
//this method applies a function against accumulator and each
//element in the array (from left to right)to reduce it to single
// value;

// let sum=arr.reduce((previousValue,currentvalue) => previousValue+currentvalue,0);
// console.log(sum);

// let product=arr.reduce((previousValue,currentvalue) => previousValue*currentvalue,1);
// console.log(product);

//  let difference=arr.reduce((previousValue,currentvalue) => previousValue-currentvalue,0);
// console.log(difference);

//6.some()
//this method checkes if atleast 1 element of an array passes the condition if yes then returns true
//else returns false;
//returns boolean;
// let some=arr.some(num =>num%2==0);
// console.log(some);


//6.every()
//this method checkes if every element of an array passes the condition if yes then returns true
//else returns false;
//returns boolean;
// let every=arr.every(num =>num>0);
//  console.log(every);

//7.sort()
//this method is use to sort the array in ascending or descending order.
// let arr1=["a","c","d","b","a","e","f","z","g","i"]
// arr1.sort((a,b)=> a>b -1,1 );
// console.log(arr1);


// OOPS Concept;


// 1.Encapsulation:
// So Many Different Methods Bundled Together
//example:
// let employee={
//   baseSalary:30000,
//   OverTime:10,
//   rate:20,
//   getWage: function(){
//     return this.baseSalary +(this.OverTime*this.rate);
//   }
// }
// console.log(employee.getWage());

//2.Abstraction :
//Hiding the Complex Data from The User for Simpler Interface
//example:
// 


//3.inHeritence :
//Inhereting parent class to its child class some of its Methods;
//elemenate redundant code


//4.Polimorphism:
//Situation Where something occurse severel different forms;
//refactor ugly Switch Cases


// function RemoveDublicate(nums){
// for(let i=1;i<nums.length;i++){
//   if(nums[i]===nums[i-1]){
//     nums.splice(i-1,1);
//     i--;
//   }else{
//     continue;
//   }
// }
// return nums;
// }

// let nums=[0,0,1,1,1,2,2,3,3,4]
// console.log(RemoveDublicate(nums));