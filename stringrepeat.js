/**
 * 
 * @param {string} str 
 */
const stringRepeat=(str)=>{
str=str.toUpperCase().split("").sort();
let count=1;
let newStr="";
for(let i=0;i<str.length;i++){
    if(str[i]===str[i+1]){
        count++;
    }else{
        newStr=newStr+str[i]+count;
        count=1;
    }
}
return newStr;
}
console.log(stringRepeat("shubham"))