let stu_name_input = document.querySelector("#studentName")
let stu_marks_input = document.querySelector("#studentMarks")
let stu_table = document.querySelector("#studentTable")
let addbtn = document.querySelector("#addBtn")
ID= 0
function idgenerator()
{
    return ID++
}

const students =
    [
        { ID: idgenerator(), Name: "Azaan", Marks: 80, Grade: 'A-', Status: "Active" },
        { ID: idgenerator(), Name: "Aazmir", Marks: 60, Grade: 'C+', Status: "Active" },
        { ID: idgenerator(), Name: "Hani", Marks: 10, Grade: 'F', Status: "Active" }
    ]

display();

function display() {
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


addbtn.addEventListener('click', function () {
    let newstudentname = stu_name_input.value
    let newstudentmarks = stu_marks_input.value


    let newdata = { ID: 4, Name: newstudentname, Marks: newstudentmarks, Grade: 'N/A', Status: "Not_Active" }
    students.push(newdata)

    display();
})


