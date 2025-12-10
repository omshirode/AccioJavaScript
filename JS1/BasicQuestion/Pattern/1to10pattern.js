let count=1;
for(let i=1;i<=4;i++){
    let gap="";
    for(let j=1;j<=i;j++){
        gap += count;
        count++;
    }
    console.log(gap);
}