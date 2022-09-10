var convert = function(s, numRows) {
 let length=s.length;
 if(numRows==1){
   return s;
 }
 let arr=[];
 let nextnum=numRows*2-2;
   for(let i=0;i<numRows;i++){
         for(var j=0;j<length;j+=nextnum){
           arr.push(s.charAt(j+i));
           if(i!=0 && i!=numRows-1 && j+nextnum-i<length){
             arr.push(s.charAt(j+nextnum-i));
            }
         }
   }
   return arr.join("");
};
let s="PAYPALISHIRING";
let numRows=4;
console.log(convert(s,numRows));

//   P     A     H     N
//   A  P  L  S  I  I  G
//   Y     I     R

//   P      I       N    
//   A    L S    I  G
//   Y  A   H  R  
//   P      I