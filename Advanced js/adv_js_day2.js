const students = [
  { id: 1, name: "Azaan", active: false, grade: 70 },
  { id: 2, name: "Ali",  active: true, grade: 80 }
];


let result = students.forEach(function(student){
    console.log(students)
})

let status = students.some(function(check)
{
    return check.active
})

console.log(status)