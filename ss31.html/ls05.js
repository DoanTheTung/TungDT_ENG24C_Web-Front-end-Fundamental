const employees = [
    {
        id: 1,
        name: "John",
        age: 18,
        address: "New York"
    },
    {
        id: 2,
        name: "Mike",
        age: 22,
        address: "Canada"
    },
    {
        id: 3,
        name: "Linda",
        age: 19,
        address: "California"
    },
    {
        id: 4,
        name: "Peter",
        age: 25,
        address: "London"
    },
    {
        id: 5,
        name: "Tony",
        age: 17,
        address: "New York"
    }
];
const tableBody = document.querySelector("#employeeTable tbody");
employees.forEach((employee, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.address}</td>
    `;
    tableBody.appendChild(row);
});