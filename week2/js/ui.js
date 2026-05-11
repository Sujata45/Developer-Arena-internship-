function renderTasks(tasks, filter){

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if(filter === "active"){

        filteredTasks = tasks.filter(
            task => !task.completed
        );
    }

    else if(filter === "completed"){

        filteredTasks = tasks.filter(
            task => task.completed
        );
    }

    filteredTasks.forEach(task => {

        const li = document.createElement("li");

        li.className = `
            task-item
            ${task.completed ? "completed" : ""}
        `;

        li.innerHTML = `

            <div>

                <input
                    type="checkbox"
                    ${task.completed ? "checked" : ""}
                    onchange="toggleTask(${task.id})"
                >

                <span class="task-text">
                    ${task.text}
                </span>

                <span class="priority ${task.priority.toLowerCase()}">
                    ${task.priority}
                </span>

            </div>

            <div class="task-actions">

                <button onclick="editTask(${task.id})">
                    Edit
                </button>

                <button onclick="deleteTask(${task.id})">
                    Delete
                </button>

            </div>
        `;

        taskList.appendChild(li);
    });
}

function updateStats(tasks){

    const stats = getTaskStats(tasks);

    document.getElementById("totalTasks")
        .textContent = stats.total;

    document.getElementById("completedTasks")
        .textContent = stats.completed;

    document.getElementById("activeTasks")
        .textContent = stats.active;
}