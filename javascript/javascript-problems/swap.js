var a = 5;
var b = 7;
console.log("before swap: a=", a, "b=", b);

var temp = a; //Here temp means temporary...
a = b;
b = temp;
console.log("after swap: a=", a, "b=", b);

var x = 3;
var y = 4;
x = x + y; // x=7;
y = x - y; // y=7-4 =3;
x = x - y; // x=7-3 =4;
console.log("after swap: x=", x, "y=", y);

//That method is javascript's standard method to swap values...
var p = 7;
var q = 8;
[p, q] = [q, p];
console.log("after swap: p=", p, "q=", q);


