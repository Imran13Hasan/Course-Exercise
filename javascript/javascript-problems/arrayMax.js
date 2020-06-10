//find the biggest value....
var marks = [45, 55, 69, 23, 87, 12, 45, 31, 98];
var max = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element;
    }
}

console.log("The highest value is:", max);


// find the smallest value... 
var marks = [55, 52, 71, 50, 89, 31, 45, 87, 99];
var smallest = marks[0];
for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    if(element < smallest){
        smallest = element;
    }
}

console.log("The smallest value is:", smallest);