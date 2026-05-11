let tasks = loadTasks();

let currentFilter = "all";

const form = document.getElementById("taskForm");

const taskInput = document.getElementById("taskInput");

const priorityInput = document.getElementById("priority");

const themeToggle = document.getElementById("themeToggle");

const clearCompletedBtn =
    document.getElementById("clearCompleted");

function init(){

    renderTasks(tasks, currentFilter);

    updateStats(tasks);
}

form.addEventListener("submit", function(e){

    e.preventDefault();

    const text = taskInput.value.trim();

    if(text === ""){

        alert("Task cannot be empty");

        return;
    }

    const task = {

        id: generateID(),

        text: text,

        completed: false,

        priority: priorityInput.value
    };

    tasks.push(task);

    saveTasks(tasks);

    renderTasks(tasks, currentFilter);

    updateStats(tasks);

    form.reset();
});

function deleteTask(id){

    tasks = tasks.filter(
        task => task.id !== id
    );

    saveTasks(tasks);

    renderTasks(tasks, currentFilter);

    updateStats(tasks);
}

function toggleTask(id){

    tasks = tasks.map(task => {

        if(task.id === id){

            task.completed = !task.completed;
        }

        return task;
    });

    saveTasks(tasks);

    renderTasks(tasks, currentFilter);

    updateStats(tasks);
}

function editTask(id){

    const task = tasks.find(
        task => task.id === id
    );

    const updatedText = prompt(
        "Edit Task",
        task.text
    );

    if(updatedText !== null &&
       updatedText.trim() !== ""){

        task.text = updatedText.trim();

        saveTasks(tasks);

        renderTasks(tasks, currentFilter);

        updateStats(tasks);
    }
}

document
.querySelectorAll(".filter-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        document
        .querySelectorAll(".filter-btn")
        .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        currentFilter = button.dataset.filter;

        renderTasks(tasks, currentFilter);
    });
});

clearCompletedBtn.addEventListener("click", () => {

    tasks = tasks.filter(
        task => !task.completed
    );

    saveTasks(tasks);

    renderTasks(tasks, currentFilter);

    updateStats(tasks);
});

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");
});

init();