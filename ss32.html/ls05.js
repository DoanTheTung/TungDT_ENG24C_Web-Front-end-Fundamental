function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();
    if (taskText === '') {
        alert("Vui lòng nhập nhiệm vụ");
        return;
    }
    let li = document.createElement('li');
    li.innerHTML = `
        ${taskText}<button class="delete-btn" onclick="deleteTask(this)">X</button>
    `;
    let taskList = document.getElementById('taskList');
    taskList.appendChild(li);
    taskInput.value = '';
}
function deleteTask(button) {
    const confirmDelete = confirm('Bạn có chắc chắn muốn xóa nhiệm vụ này không?');
    if (confirmDelete) {
        let li = button.parentElement;
        li.remove();
    }
}