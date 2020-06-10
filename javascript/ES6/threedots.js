const ages = [10, 20, 15, 25, 30, 35];
const ages2 = [21, 25, 28, 26, 24, 32];
const ages3 = [30, 31, 35, 36, 38];
const agesAll = ages.concat(ages2).concat([80, 90, 99]).concat(ages3);

const agesAll2 = [...ages, ...ages2, 80, 90, 99, ...ages3]; //agesAll2 is the easier way of agesAll...  

// console.log(agesAll2);


const business = 650;
const minister = 450;
const banker = 580;

const maximum = Math.max(business, minister, banker);
// console.log(maximum);

const balance = [750, 800, 650, 450, 580];
const maximum2 = Math.max(...balance);
console.log(maximum2);