let matrix=[[1,2,3],[4,5,6],[7,8,9]];
let mul=1;
for(let i=0;i<matrix.length;i++){
    let sum=0;
    for(let j=0;j<matrix[i].length;j++){
        sum += matrix[i][j];
    }
    mul *= sum;
} 
console.log(mul);    

