let  a = parseInt(prompt("Enter num1:"));
let  b = parseInt(prompt("Enter num2:"));
let button = parseInt(prompt("Enter Button:"));
let sum=a+b;;
let sub=a-b;
let mul=a*b;
let div=a/b;
switch(button){
    case 1:
        console.log(sum);
        break;
    case 2:
        console.log(sub);
        break;
    case 3:
        console.log(mul);
        break;
    case 4:
        console.log(div);
        break;
    default:
        console.log("Error");
}