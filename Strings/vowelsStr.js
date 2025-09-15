let str="My Name Is Trumph";
let vowels="aeiouAEIOU";
let count="";
for(let char of str){
    if(vowels.includes (char)){
        count++;
    }
}
console.log(count);