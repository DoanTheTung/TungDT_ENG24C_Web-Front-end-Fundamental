let initialEmployees = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        position: "Developer"
    },
    {
        id: 2,
        name: "Trần Thị B",
        position: "Designer"
    },
    {
        id: 3,
        name: "Phạm Văn C",
        position: "Project Manager"
    },
    {
        id: 4,
        name: "Lê Thị D",
        position: "QA Engineer"
    },
    {
        id: 5,
        name: "Vũ Văn E",
        position: "DevOps"
    },
    {
        id: 6,
        name: "Hoàng Thị F",
        position: "HR Manager"
    }

];

if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees', JSON.stringify(initialEmployees));
}

let employees = JSON.parse(localStorage.getItem('employees')) || [];
let nameInput = document.getElementById('nameInput');
let positionInput = document.getElementById('positionInput');
let addBtn = document.getElementById('addBtn');
let employeeList = document.getElementById('employeeList');
let clearAllBtn = document.getElementById('clearAllBtn');
let notification = document.getElementById('notification');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let pageNumbers = document.getElementById('pageNumbers');

const employeesPerPage = 3;
let currentPage = 1;

displayEmployees();
renderPagination();

addBtn.addEventListener('click', function () {
    let name = nameInput.value.trim();
    let position = positionInput.value.trim();

    if (name && position) {
        let newEmployee = {
            id: employees.length ? employees[employees.length - 1].id + 1 : 1,
            name: name,
            position: position
        };
        employees.push(newEmployee);
        localStorage.setItem('employees', JSON.stringify(employees));
        displayEmployees();
        renderPagination();
        nameInput.value = '';
        positionInput.value = '';
        showNotification('Thêm nhân viên thành công!', 'success');
    } else {
        showNotification('Vui lòng nhập đầy đủ thông tin!', 'error');
    }
});

function displayEmployees() {
    employeeList.innerHTML = '';
    const start = (currentPage - 1) * employeesPerPage;
    const end = start + employeesPerPage;
    const paginatedEmployees = employees.slice(start, end);

    paginatedEmployees.forEach((employee, index) => {
        let globalIndex = start + index + 1
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${globalIndex}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
            
        `;
        employeeList.appendChild(row);
    });
};

function renderPagination() {
    const totalPages = Math.ceil(employees.length / employeesPerPage);
    pageNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            displayEmployees();
            renderPagination();
        })
        pageNumbers.appendChild(pageBtn);
    }


};

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayEmployees();
        renderPagination();
    }
});

nextBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(employees.length / employeesPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayEmployees();
        renderPagination();
    }
});