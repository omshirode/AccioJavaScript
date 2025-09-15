/*let n=6;

let handshake= (n  * (n - 1)) / 2;
console.log(handshake);*/


//using loop
let n=6;
let hs=0;
for(let i=1;i<=n;i++){
    for(let j=i+1;j<=n;j++){
        hs++;
    }
}
console.log(hs);