//print all subarrays
function printAllSubArray(arr){
    const n=arr.length;
    for(let i=0;i<n;i++){
        
        for(let j=i;j<n;j++){
            let sub=[];
            
            for(let z=i;z<=j;z++){
                sub.push(arr[z]);
                
            }
            console.log(sub);
            
        }
    }
}
const arr=[1,2,3];
printAllSubArray(arr);