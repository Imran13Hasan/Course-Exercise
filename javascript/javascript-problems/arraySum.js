//sum of array...
var numbers = [45, 54, 21, 23, 57, 65, 87];
var sum = 0;
for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    sum = sum + element;
}

console.log("Total of the numbers:", sum);


//put the sum of array into function for several time uses...
function arraySum(numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    } 
    return sum;
}

var numbers = [45, 54, 21, 23, 57, 65, 87];
var result = arraySum(numbers);
console.log("Total of the numbers:", result);

//calls function using custom arrays...
var total = arraySum([42, 24, 57, 52, 85, 54]);
console.log("Total of the numbers:", total);


//to add all the strings...
var friends = ["Mahmudul ", "Hasan ", "Imran"];
var allNames = "";
for(var i = 0; i < friends.length; i++){
    var name = friends[i];
    allNames = allNames+name;
}
console.log(allNames);