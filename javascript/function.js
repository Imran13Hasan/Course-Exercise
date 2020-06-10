function sayLoveYou(){
    console.log("How are you?");
    console.log('Im fine, whats about you?');
}

// sayLoveYou();


function doubleIt(num){
    var result = num * 2;
    console.log(result);
}

// doubleIt(10);


function doubleIt(num){
    var result = num * 2;
    var resultTwo = num * 5;
    console.log(result);
    console.log(resultTwo);
}

// doubleIt(5);
// doubleIt(50);



function doubleIt(num){
    var result = num * 2;
    return result;
}

var first = doubleIt(4);
var second = doubleIt(5);
var total = first + second;

// console.log(total);


function add(num1, num2){
    var result = num1 + num2 ;
    return result;
}

var sum = add(15, 17);
console.log(sum);
