let arr=[1,2,3,4];
for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        let sub=[];
        for(let z=i;z<=j;z++){
            sub.push(arr[z])
        }
        console.log(sub)
    }
}