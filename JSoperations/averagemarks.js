//marks array
let marks=[98,65,78,86,53];
//calculate sum of all sub
let sum=0;
for(let i=0;i<marks.length;i++) {
  sum=sum+marks[i];
}
console.log("Total marks are: ", sum);
//calculate average of all marks 
let avg= sum / marks.length;
console.log("Average is: ",avg);
//check grade 
function mark(avg){
if(avg >= 90){
  console.log("grade=A+");
}
else if(avg>=80){
  console.log("grade:A");
}
else if(avg>=70){
  console.log("grade:B+");
}
else if(avg>=60){
  console.log("grade:B");
}
else{
  console.log("grade:c");
}
}
mark(avg);
//reverse the array
function reverse(){
  let rev=[];
  for(let i=marks.length-1;i>=0;i--){
    rev.push(marks[i]);
  }
  console.log("Reverse array is ", rev);
}
reverse();