let initialTasks = [
    {
        id: 1,
        content: "Learn JavaScript Session 01",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Anh Bach"
    },
    {
        id: 2,
        content: "Learn JavaScript Session 2",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Lâm th"
    },
    {
        id: 3,
        content: "Learn CSS Session 1",
        dueDate: "2023-04-17",
        status: "Pending",
        assignedTo: "Hieu Ci ot ot"
    }
];

if (!localStorage.getItem('tasks')) {
    localStorage.setItem('tasks', JSON.stringify(initialTasks));
}

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
const submitBtn = document.getElementById('submitBtn');
let editId = null;
displayTasks();

taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const content = document.getElementById('content').value;
    const dueDate = document.getElementById('dueDate').value;
    const status = document.getElementById('status').value;
    const assignedTo = document.getElementById('assignedTo').value;
    if (editId !== null) {
        let task = tasks.find(t => t.id === editId);
        task.content = content;
        task.dueDate = dueDate;
        task.status = status;
        task.assignedTo = assignedTo;
        editId = null;
        submitBtn.textContent = 'Add Task';
    } else {
        let newTask = {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            content,
            dueDate,
            status,
            assignedTo
        };
        tasks.push(newTask);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
    taskForm.reset();
});

function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task.content}</td>
            <td>${task.dueDate}</td>
            <td>${task.status}</td>
            <td>${task.assignedTo}</td>
            <td class="action-buttons">
                <button onclick="editTask(${task.id})">Sửa</button>
                <button onclick="deleteTask(${task.id})">Xóa</button>
            </td>
        `;
        taskList.appendChild(row);
    });
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        document.getElementById('content').value = task.content;
        document.getElementById('dueDate').value = task.dueDate;
        document.getElementById('status').value = task.status;
        document.getElementById('assignedTo').value = task.assignedTo;
        editId = id;
        submitBtn.textContent = 'Update Task';
    }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}