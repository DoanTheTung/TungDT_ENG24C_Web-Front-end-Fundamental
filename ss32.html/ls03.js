function addSubject() {
    let inputElement = document.getElementById("subjectInput");
    let subjectName = inputElement.value.trim();
    if (subjectName === "") {
        alert("Tên môn học không được để trống!");
        return;
    }
    let listElement = document.getElementById("subjectList");
    let newItem = document.createElement("li");
    newItem.textContent = subjectName;
    listElement.appendChild(newItem);
    inputElement.value = "";
}