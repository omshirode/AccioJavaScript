let arr=[3,5,6,9,11];
let max=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i] > max){
        max=arr[i];
    }
}
console.log(max);