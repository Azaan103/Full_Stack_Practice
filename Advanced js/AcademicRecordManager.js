let stu_name_input = document.querySelector("#studentName")
let stu_marks_input = document.querySelector("#studentMarks")
let stu_table = document.querySelector("#studentTable")
let addbtn = document.querySelector("#addBtn")
let fndbtn = document.querySelector("#findBtn")
let passedBtn = document.querySelector("#passedBtn")
ID = 241160

function idgenerator() {
    return ID++
}

const students =
    [
        { ID: idgenerator(), Name: "Azaan", Marks: 80, Grade: 'A-', Status: "Active" },
        { ID: idgenerator(), Name: "Aazmir", Marks: 60, Grade: 'C+', Status: "Active" },
        { ID: idgenerator(), Name: "Hunaiba", Marks: 90, Grade: 'A+', Status: "Active" },
        { ID: idgenerator(), Name: "Alice", Marks: 30, Grade: 'F', Status: "Active" },
        { ID: idgenerator(), Name: "Hani", Marks: 10, Grade: 'F', Status: "Active" }
    ]

display();

//                DISPLAY STUDENT TABLE 
function display() {

    stu_table.innerHTML = "";
    students.forEach(function (student) {

        stu_table.innerHTML += `
        <tr>
            <td>${student.ID}</td>
            <td>${student.Name}</td>
            <td>${student.Marks}</td>
            <td>${student.Grade}</td>
            <td>${student.Status}</td>
        </tr>
    `;
    })
}

//                ADD STUDENT LOGIC
addbtn.addEventListener('click', function () {
    let newstudentname = stu_name_input.value
    let newstudentmarks = stu_marks_input.value

    let newdata = { ID: idgenerator(), Name: newstudentname, Marks: newstudentmarks, Grade: 'N/A', Status: "Not_Active" }
    students.push(newdata)

    display();
})

fndbtn.addEventListener('click', function () {

    let foundstu = students.find(function (student) {
        let newstudentname = stu_name_input.value
        return student.Name == newstudentname
    })
    if (foundstu) {

        stu_table.innerHTML = "";

        stu_table.innerHTML += `
        <tr>
            <td>${foundstu.ID}</td>
            <td>${foundstu.Name}</td>
            <td>${foundstu.Marks}</td>
            <td>${foundstu.Grade}</td>
            <td>${foundstu.Status}</td>
        </tr>
    `;
    }
    else alert("Student Not found")
})

passedBtn.addEventListener('click', function () {

    let findpassstu = students.filter(function (student) {
        return student.Marks > 50 
    })

        stu_table.innerHTML = "";
    findpassstu.forEach(function(student){

        
        stu_table.innerHTML += `
        <tr>
             <td>${student.ID}</td>
            <td>${student.Name}</td>
            <td>${student.Marks}</td>
            <td>${student.Grade}</td>
            <td>${student.Status}</td>
        </tr>
    `;
    })


})