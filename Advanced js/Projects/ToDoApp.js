// =========================
// DOM Elements
// =========================

const taskInput = document.querySelector("#taskInput");
const priorityInput = document.querySelector("#priority");
const dateInput = document.querySelector("#date");
const addBtn = document.querySelector("#addBtn");


const taskContainer = document.querySelector("#taskContainer");

// =========================
// Data
// =========================

let tasks = [
    {
        id: 1,
        title: "Finish JavaScript ToDo App",
        priority: "High",
        date: "2026-07-21",
        completed: false
    },
    {
        id: 2,
        title: "Workout at 6 PM",
        priority: "Medium",
        date: "Today",
        completed: false
    }
];

// =========================
// Display Tasks
// =========================

function displayTasks() {

    taskContainer.innerHTML = "";

    tasks.forEach((task) => {

        const priorityClass = task.priority.toLowerCase();

        taskContainer.innerHTML += `
        <div class="task">

            <div class="left">

        <input
        type="checkbox"
        class="checkbox"
        data-id="${task.id}"
        ${task.completed ? "checked" : ""}>

                <div>

                    <h3>${task.title}</h3>

                    <div class="meta">

                        <div class="tag ${priorityClass}">
                            ${task.priority}
                        </div>

                        <div class="tag">
                            ${task.date}
                        </div>

                    </div>

                </div>

            </div>

            <div class="actions">

                <button class="secondary">Edit</button>

                <button class="delete" data-id="${task.id}"> Delete </button>

            </div>

        </div>
        `;

    });

}

// =========================
// Add Task
// =========================

function addTask() {

    const title = taskInput.value;
    const priority = priorityInput.value;
    const date = dateInput.value;

    if (title === "") return;

    const task = {

        id: Date.now(),
        title,
        priority,
        date,
        completed: false

    };

    tasks.push(task);

    displayTasks();

    taskInput.value = "";
    priorityInput.value = "Medium";
    dateInput.value = "";

}

addBtn.addEventListener("click", addTask);

// =========================
// Delete Task
// =========================


taskContainer.addEventListener("click", (e) => {

    if (e.target.classList.contains("delete")) {
        const deletion_id = Number(e.target.dataset.id)
       tasks =  tasks.filter((task) => {
            return task.id != deletion_id
        })
        displayTasks();
    }
})

taskContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("checkbox")) {


// =========================
// Initial Render
// =========================

displayTasks();




