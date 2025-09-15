let arr=[3,4,5,6];
let sum=0;
let prefix=[];
for(let i=0;i<arr.length;i++){
    sum += arr[i];
    prefix.push(sum);
}
console.log(prefix);
//[3, 7, 12, 18]