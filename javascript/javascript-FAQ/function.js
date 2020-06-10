
function everybody(num) {
    if (num % 2 == 0) {
        console.log(num, ': is even number');
    } else {
        console.log(num, ': is odd number');
    }
}

function evenify_all(ages) {
    for (let i = 0; i < ages.length; i++) {
        const num = ages[i];
        everybody(num);
    }
    
}

// const friends_age = [20, 21, 23, 25, 30];
// for (let i = 0; i < friends_age.length; i++) {
//     const age = friends_age[i];
//     everybody(age);
// }

// const child = [8, 21, 27, 23, 10];
// for (let i = 0; i < child.length; i++) {
//     const child_age = child[i];
//     everybody(child_age);
// }

const ages = [50, 20, 41, 32, 19, 34, 79, 51];
evenify_all(ages);

const age = [1, 2, 3, 4, 5, 6];
evenify_all(age);

//or.... the another functions method in short...

function evenify_all(nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
            if (num % 2 == 0) {
                console.log(num, ': is even number');
            } else {
                console.log(num, ': is odd number');
            }
    }   
}

const nums = [50, 20, 41, 32, 19, 34, 79, 51];
evenify_all(nums);
