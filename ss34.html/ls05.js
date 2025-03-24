function getEmployees() {
    return JSON.parse(localStorage.getItem("employees")) || [];
}

function displayEmployees() {
    let employees = getEmployees();
    let tableBody = document.getElementById("employeeList");
    tableBody.innerHTML = "";
    employees.forEach((employee, index) => {
        let row = `<tr>
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
            <td>
                <button onclick="deleteEmployee(${index})">Xóa</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function addEmployee() {
    let name = document.getElementById("name").value.trim();
    let position = document.getElementById("position").value.trim();

    if (name === "" || position === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    let employees = getEmployees();
    employees.push({ name, position });
    localStorage.setItem("employees", JSON.stringify(employees));
    displayEmployees();

    document.getElementById("name").value = "";
    document.getElementById("position").value = "";
}

function deleteEmployee(index) {
    let employees = getEmployees();
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    displayEmployees();
}

displayEmployees();