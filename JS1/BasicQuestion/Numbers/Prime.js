let num=13;
let isPrime=true;
if(num <= 1){
    isPrime=false;
}
for(let i=2;i<num;i++){
    if(num % i === 0){
        isPrime=false;
        break;
    }
}
console.log(isPrime);
