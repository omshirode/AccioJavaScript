let n=39 ;
if(n % 2 ==0){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;

    }
    console.log("Number is Even =",n,",Now sum of that n from 1 is=",sum);
}
else{
    console.log("Number is odd=",n,",Factors of n are=")
    for(let i=1;i<=n;i++){
        if(n % i == 0){
            console.log(i);
        }
    }
}  
