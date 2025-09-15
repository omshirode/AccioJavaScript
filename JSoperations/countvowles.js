// count vowels in string

function countVowels(str){

let vowels= 'aeiouAEIOU';
let count=0;
for(let char of str){
    if(vowels.includes(char)){
        count++;
    }
}
return count;

}
let str="Hello, my name is Rahul";
console.log(countVowels(str));