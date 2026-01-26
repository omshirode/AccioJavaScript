let arr=[2,4,5,2];
let unq=[];
for(let i=0;i<arr.length;i++){
    if(!unq.includes(arr[i])){
        unq.push(arr[i]);
    }
}
console.log(unq);