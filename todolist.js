// Retrieve tasks from local storage
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        taskList.appendChild(li);
    });
    
    // Add event listeners to delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach((button) => {
        button.addEventListener('click', deleteTask);
    });
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const newTask = taskInput.value.trim();
    
    if (newTask !== '') {
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(event) {
    const index = event.target.dataset.index;
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Add event listener to the "Add" button
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Initial rendering of tasks
renderTasks();
