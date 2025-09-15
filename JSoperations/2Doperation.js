let mat=[[1,2,3],
         [4,5,6]];
mat[0][1]=10;           //modify element 
console.log(mat);
console.log(mat[1][2]);  //print specific element
mat.push([0,0,0]);    //add row to last
console.log(mat);
mat.pop();      //remove row from last
console.log(mat);

//convert 2d array to 1d
let arr=mat.flat();
console.log(arr);  

