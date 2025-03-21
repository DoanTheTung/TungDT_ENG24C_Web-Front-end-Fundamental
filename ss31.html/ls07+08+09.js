let todoList = [
    {
        id: 1,
        task: 'Hit the gym',
        completed: false,
    },
    {
        id: 2,
        task: 'Pay bills',
        completed: true,
    },
    {
        id: 3,
        task: 'Meet geogre',
        completed: false,
    },
    {
        id: 4,
        task: 'Buy eggs',
        completed: false,
    },
    {
        id: 5,
        task: 'Read a book',
        completed: false,
    },
    {
        id: 6,
        task: 'Origanize office',
        completed: false,
    },
];
function renderTodo() {
    let listTodo = document.getElementById("myUL");
    listTodo.innerHTML = "";
    todoList.forEach(function (item) {
        if (!item.completed) {
            listTodo.innerHTML += `<li>${item.task}<span class="close" onclick="deleteTodo(${item.id})">X</span></li>`;
        } else {
            listTodo.innerHTML += `<li class="checked">${item.task}<span class="close" onclick="deleteTodo(${item.id})">X</span></li>`;
        }
    });
}
function addTodo() {
    let inputElement = document.getElementById("myInput").value;
    if (inputElement.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }
    let id = todoList.length[todoList.length -1].id +1;
    let toDo = { id: id, task: inputElement, completed: false };
    todoList.push(toDo);
    document.getElementById("myInput").value = "";
    renderTodo();
}
function deleteTodo(id) {
    todoList = todoList.filter(task => task.id !== id);
    renderTodo();
}
renderTodo();