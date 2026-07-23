// =========================
// DOM Elements
// =========================

const taskInput = document.querySelector("#taskInput");
const priorityInput = document.querySelector("#priority");
const dateInput = document.querySelector("#date");
const addBtn = document.querySelector("#addBtn");
const active = document.querySelector('#activeFilter')
const completed = document.querySelector('#completedFilter')
const allTasks = document.querySelector('#allFilter')
const taskContainer = document.querySelector("#taskContainer");
const totalTasks = document.querySelector("#totalTasks");
const completedTasks = document.querySelector("#completedTasks");
const pendingTasks = document.querySelector("#pendingTasks");

function updateStats(){

    totalTasks.textContent = tasks.length;

    completedTasks.textContent = tasks.filter(task => task.completed).length;

    pendingTasks.textContent = tasks.filter(task => !task.completed).length;

}
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

function displayTasks(taskList = tasks) {

    taskContainer.innerHTML = "";

    taskList.forEach((task) => {

        const priorityClass = task.priority.toLowerCase();

        taskContainer.innerHTML += `
        
      <div class="task ${task.completed ? "completed" : ""}">

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

        <button class="delete" data-id="${task.id}">
            Delete
        </button>

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
    updateStats()

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
        tasks = tasks.filter((task) => {
            return task.id != deletion_id
        })
        displayTasks();
        updateStats();
    }
})

// =========================
// Checkbox tick and cross
// =========================
taskContainer.addEventListener("click", (e) => {

    if (e.target.classList.contains("checkbox")) {

        const id = Number(e.target.dataset.id);

        const task = tasks.find(task => task.id === id);

        task.completed = !task.completed;
        displayTasks();
        updateStats();

    }

});

// =========================
// Completed Tasks
// =========================

active.addEventListener("click",()=>{
    const activetasks = tasks.filter(task => task.completed != true)
    
    displayTasks(activetasks)
    updateStats();
})

// =========================
//  Completed Tasks
// =========================

completed.addEventListener("click",()=>{
    const completedtasks = tasks.filter(task => task.completed == true)
    
    displayTasks(completedtasks)
    updateStats();
})

// =========================
//  All Tasks
// =========================

allTasks.addEventListener("click",()=>{
        displayTasks()
        updateStats();
})

// =========================
// Initial Render
// =========================

displayTasks();
updateStats();


