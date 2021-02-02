class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school ="UAP";
    }
}

const student1 = new Student(12, "Fahim");
const student2 = new Student(15, "Shahriar");

console.log(student1, student2);
