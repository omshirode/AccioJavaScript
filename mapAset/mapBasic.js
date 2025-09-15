//Stores key–value pairs (like an object, but more powerful).
//Keys can be any type (object, function, number, string, etc.).
let map = new Map();
//add values
map.set("name","Om");
map.set(22,"age");
map.set(true,"Boolean Key");
//Get Values
console.log(map.get("name"));

//check existance
console.log(map.has(true));
//check size
console.log(map.size);
//delete
map.delete(22);
console.log(map.size);
console.log(map);
//Iterate loop
for(let [key,value] of map){
    console.log(key,value);
}