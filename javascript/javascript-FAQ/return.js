function evenify(num) {
    if (num % 2 == 0) {
        return num;          // console.log(num, ': is even number');
    } else {
        console.log(num, ': is odd number');
    }
}
var result = evenify(7);
console.log('result', result);

///////////////////////////////////////

function evenify(num) {
    var result;
    if (num % 2 == 0) {
        result = num;  
    } else {
        result = num*2;
    }
    return result;
}
var result = evenify(8);
var square = result * result;
console.log('result', square);


function evenify_all(nums) {
    var even_array = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = evenify(num);
        even_array.push(result);
    }
    return even_array;
}

var ages = [10, 5, 12, 15, 17, 20];
var nums_even = evenify_all(ages);
console.log(nums_even);
