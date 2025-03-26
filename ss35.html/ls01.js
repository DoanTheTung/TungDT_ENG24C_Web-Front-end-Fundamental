let toDoList2 = JSON.parse(localStorage.getItem("toDoList2")) || [
    { id: 1, content: "quản lý" },
    { id: 2, content: "nhân viên" },
    { id: 3, content: "phục vụ" }
];

let ul = document.getElementById("list");
let btn = document.getElementById("btn");
let input = document.getElementById("cv");

btn.onclick = function () {
    let content = input.value.trim();
    if (content.length !== 0) {
        let id = toDoList2.length > 0 ? toDoList2[toDoList2.length - 1].id + 1 : 1;
        let newTask = { id: id, content: content };
        toDoList2.push(newTask);
        localStorage.setItem("toDoList2", JSON.stringify(toDoList2));
        input.value = "";
        renderList();
    } else {
        alert("Vui lòng nhập công việc!");
    }
};

function renderList() {
    ul.innerHTML = "";
    toDoList2.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <span>${task.content}</span>
            <button onclick="editTask(${index})">Sửa</button>
            <button onclick="deleteTask(${index})">Xóa</button>
        `;
        ul.appendChild(li);
    });
}

function editTask(index) {
    let newContent = prompt("Nhập nội dung mới:", toDoList2[index].content);
    if (newContent !== null && newContent.trim() !== "") {
        toDoList2[index].content = newContent.trim();
        localStorage.setItem("toDoList2", JSON.stringify(toDoList2));
        renderList();
    }
}

function deleteTask(index) {
    let deleteTask = prompt("Bạn có chắc chắn muốn xóa công việc này?(Yes or No)");
    if (deleteTask === "Yes") {
        toDoList2.splice(index, 1);
        localStorage.setItem("toDoList2", JSON.stringify(toDoList2));
        renderList();
    }
}

renderList();
