function reverseString(str){
    var reverse = "";
    for(var i=0; i<str.length; i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var statement = "Hello Allien's bhai brothers";
var forAlien = reverseString(statement);
console.log(forAlien);

var elon = reverseString('This is Elon Masks Tesla');
console.log(elon);


//This is short Method...
function reverseString(str){
  return str.split("").reverse().join(""); 
}

console.log(reverseString("Hello World. This is the short method of reverse string"));

//This one transforms a string verse from reverse...
function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("gnirts esrever fo dohtem trohs eht si sihT .dlroW olleH"));