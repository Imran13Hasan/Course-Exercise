
// There are three way to declare object's properties... 
var student = { id:123, roll:45, name:"Imran", phone:01884649459};
var student2 = { id:456, roll:85, name:"Hasan", phone:01914068745};

var phoneNo = student.phone;

// console.log(phoneNo);


var student = { id:123, roll:45, name:"Imran", phone:01884649459};
var student2 = { id:456, roll:85, name:"Hasan", phone:01914068745};

var phoneNo = student["phone"];

// console.log(phoneNo);


var student = { id:123, roll:45, name:"Imran", phone:01884649459};
var student2 = { id:456, roll:85, name:"Hasan", phone:01914068745};

var phoneProName = "phone"
var phoneNo = student2[phoneProName];

// console.log(phoneNo);


var student = { id:123, roll:45, name:"Imran", phone:01884649459};
var student2 = { id:456, roll:85, name:"Hasan", phone:01914068745};

//Update phone no / Name...
student2.phone = 123;
student [phoneProName] = 444555;
student ["name"] = "Mahmudul";

//Add new property...
student2.address = "Dhaka";

console.log(student);
console.log(student2);