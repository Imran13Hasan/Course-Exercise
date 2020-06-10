// function doubleIt(num){
//     return num * 2;
// }


// const doubleIt = function myFunc(num){
//     return num * 2;
// }


const doubleIt = num => (num) * 2;  //This is the easiest way to declare a function by arrow method of ES6... Here num is a parameter and => sign indicating to go through the function...
const result = console.log(doubleIt(65));

const add = (x,y,z) => x+y*z; //When you had more than one parameters...
console.log(add(50, 70, 2));


const give5 = () => 5; //When you had no parameter...
const result2 = give5();
console.log(result2);


const doMath = (x , y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
console.log(doMath(7 , 5));