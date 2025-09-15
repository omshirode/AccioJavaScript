let arr=[[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,4]];
let result=[];
for(let i=0;i<arr.length;i++){
    result.push([]);
}
for(let row=0;row<arr.length;row++){
    for(let column=0;column<arr[0].length;column++){
        result[column].push(arr[row][column]);
    }
}
console.log(result);