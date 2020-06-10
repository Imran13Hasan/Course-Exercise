class Student{
    constructor(id, name, fathersName){
        this.Id = id;
        this.Name = name;
        this.FathersName = fathersName;
        this.School = "Ujan Gobindi BC High School";
    }
}

const student1 = new Student(5, "Imran", "Zakir Hossain");
const student2 = new Student(10, "Shiyam", "Musleh Uddin");
const student3 = new Student(12, "Sifat");
const student4 = new Student(15, "Rifat");
const student5 = new Student(18, "Shoheb");
const student6 = new Student(20, "Shahidul");
const student7 = new Student(25, "Sharique Uddin");

console.log(student1, student2.FathersName, student3, student4, student5, student6, student7);

