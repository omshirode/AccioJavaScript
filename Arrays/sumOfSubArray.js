function sumOfSubArray(arr){
    const n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            const sub=[];
            let sum=0;
            for(let z=i;z<=j;z++){
                sub.push(arr[z]);
                sum += arr[z];
            }
            console.log(sub);
            console.log(sum);
        }
    }
}
const arr=[1,2,3];
sumOfSubArray(arr);