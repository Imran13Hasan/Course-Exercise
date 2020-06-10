//will use arguments when the function contains only two values to add but when we can see in the array or parameters there are more than two values then we can use arguments so that all the values could be added without increasing the parameters like num3, num4, etc...
function addNumbers(num1, num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}

var result = addNumbers(8, 10, 3, 10, 15, 50, 200);
console.log(result);