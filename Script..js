// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('taskList');
        
        // Create a new task item
        const li = document.createElement('li');
        li.innerHTML = `
            <span onclick="toggleComplete(this)">${taskText}</span>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
        
        taskList.appendChild(li);
        taskInput.value = ""; // Clear the input field
    }
}

// Function to toggle task completion (strikethrough)
function toggleComplete(task) {
    task.classList.toggle('completed');
}

// Function to delete a task
function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
