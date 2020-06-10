//Remove duplicate items from the array...
var name = ["Imran", "Sajeeb", "Mahmudul", "Hasan", "Imran", "Mahmudul", "Reyad", "Sajeeb"];
var uniqueName = [];    //This is a new container where we can put unique varibales...

for(var i = 0; i < name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);


//Output only duplicate items...
var numbers = [45, 52, 54, 45, 85, 52, 45];
var duplicateNumbers = [];
for( var i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    var index = duplicateNumbers.indexOf(element);
    if(index > -1){
        duplicateNumbers.push(element);
    }
}
console.log(duplicateNumbers); //It doesn't works...

function add(a, b){
    return a + b;
}
add("adam" + "eve")

console.log(add);