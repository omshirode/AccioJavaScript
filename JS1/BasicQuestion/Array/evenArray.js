let arr=[2,3,5,6,8];
let even=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        even.push(arr[i]);
    }
}
console.log(even);