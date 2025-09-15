 const obj={
    name:"Om",
    age:22,
    address:"Pune"
 };
 //print specifc
 console.log(obj["name"]);
 console.log(obj.name);
 //chech data type
 console.log(typeof obj.name);
 console.log(typeof obj["name"]);
 //update value
 obj.name="Boss";
 console.log(obj.name);
 //add function in obj
 obj.fnc=function(){
    console.log("Hii I am Function");
 }
 console.log(obj.fnc());
 //show obj property in function .this
 obj.fnc2=function(){
    console.log(`Hii my name is ${this.name}`);
 }
 return obj.fnc2();
 
 