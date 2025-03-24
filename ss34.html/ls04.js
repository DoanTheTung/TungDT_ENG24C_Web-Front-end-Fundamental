let taskInput = document.getElementById('taskInput');
let addBtn = document.getElementById('addBtn');
let taskList = document.getElementById('taskList');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
displayTasks();

addBtn.addEventListener('click', function () {
    let taskContent = taskInput.value.trim();
    if (taskContent) {
        let newTask = {
            id: Math.random(),
            content: taskContent
        };
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
        taskInput.value = '';
    }
});

function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        let li = document.createElement('li');
        li.innerHTML = `
             ${task.content}
             <button onclick="deleteTask(${task.id})">Xóa</button>
         `;
        taskList.appendChild(li);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}