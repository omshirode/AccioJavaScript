let arr=[[1,2,3],[3,4]];
console.log(isMatrix(arr));
function isMatrix(arr){
    //If the input is not an array.
    if(!Array.isArray(arr)) return false;
    
    //first row length
    let firstRowLength=arr[0].length;

    //loop through each row
    for(let i=0;i<arr.length;i++){
        //Checks if each row is actually an array. If any row is not an array, return false.
        if(!Array.isArray(arr[i])) return false;
        if(arr[i].length !== firstRowLength) return false;
    }
    return true;
}
//false

