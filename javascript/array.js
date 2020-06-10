// Ekhane array er variables simply output kortese. 
var friendsAge = [20, 23, 21, 25, 27, 29, 22];
console.log(friendsAge[2]);


// Ekhane elements er position decline kore output kortese. 
var friendsAge = [20, 23, 21, 25, 27, 29, 22];
var sonaliAge = friendsAge[0];
console.log(sonaliAge);


// Ekhane ekta variables er ekta element er value replace kortese. 
var friendsAge = [20, 23, 21, 25, 27, 29, 22];
friendsAge[1] = 30;
console.log(friendsAge);


// Ekhane indexOf diye elements er position trace kora hoitese. 
var friendsAge = [20, 23, 22, 25, 26, 29, 27];
var position = friendsAge.indexOf(27);
console.log(position);


// Ekhane indexOf diye elements er position trace kora hoitese. Ekta value ekadhikbar thakle first position er ta output ashbe.
var friendsAge = [20, 23, 22, 25, 22, 29, 22];
var position = friendsAge.indexOf(22);
console.log(position);


// Elemnts push. 
var friendsAge = [20, 23, 21, 25, 27, 29, 22];
friendsAge.push(15);
friendsAge.push(40, 45, 50);
console.log(friendsAge);


// Varibale a elements koto gula ta length diye dekha jay 
var friendsAge = [20, 23, 21, 25, 27, 29, 22];
friendsAge.push(15);
console.log(friendsAge.length)
friendsAge.push(40, 45, 50);
console.log(friendsAge.length);


// Elements k array theke remove korte hole .pop(); use korte hoy. By default .pop(); dile last element remove hoye jay. 
var friendsAge = [20, 23, 21, 25, 27, 29, 22];
friendsAge.push(15);
console.log(friendsAge)
friendsAge.push(40, 45, 50);
friendsAge.pop();
console.log(friendsAge);


// Array te Elements first er dike add korte chaile .unshift(); use korte hoy. Ekhane 3 ta elements add kore dekha gelo last theke input nitese. 
var friendsAge = [20, 23, 21, 25, 27, 29, 22];
friendsAge.unshift("Lemon");
friendsAge.unshift(5);
friendsAge.unshift("Apple");
console.log(friendsAge);


// Array te Elements first er theke remove korte chaile .shift(); use korte hoy.
var friendsAge = [20, 23, 21, 25, 27, 29, 22];
friendsAge.shift();
friendsAge.shift();
friendsAge.shift();
console.log(friendsAge);