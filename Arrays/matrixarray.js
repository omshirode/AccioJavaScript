const arr=[1,[2,3,4],5,6,[7,8]];
//using totype method
for(let i=0;i<arr.length;i++){
    if(typeof arr[i] == "number"){
        console.log(arr[i]);
    }else{
        for(let j=0;j<arr[i].length;j++){
            console.log(arr[i][j]);
        }
    }
}
//
1
2
3
4
5
6
7
8
9