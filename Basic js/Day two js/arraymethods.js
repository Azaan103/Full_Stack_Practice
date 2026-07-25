let Students = [
    {
        name:"Azaan",
        age:20,
        city:"Karachi",
        marks:85
    },
    {
        name:"Aazmir",
        age:20,
        city:"Karachi",
        marks:89
    },
    {
        name:"Hunaiba",
        age:21,
        city:"Karachi",
        marks:86
    }
]

let passed = Students.filter(function(student){
   return student.marks > 85 
})
console.log(passed)




// function gradeChecker(marks){
//     if(marks>=80){
//         return "A+"
//     }
//     else if(marks>=70){
//         return "A"
//     }
// }
// function highestMarks()
// {
//     let highestmarks = Students[0]

//     for(i=0;i<Students.length;i++)
//     {
//      if(Students[i].marks>highest.marks)
//      {
//         highestmarks=Student.marks[i]
//      }
//     }
//     return highestMarks
// }
// console.log(highestMarks(highestMarks))


// // let highestmarks = Students.marks.filter(function(marks){
// //     if(marks==86)
// // })




