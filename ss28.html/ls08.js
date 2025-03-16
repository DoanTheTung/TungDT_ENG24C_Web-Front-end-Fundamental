let employees = [];
let loop = true;
let choice = 0;

while (loop) {
    let choice = +prompt(
        `
        -----Danh sách nhân viên-----
         1. Thêm nhân viên mới
         2. Xóa nhân viên theo Id
         3. Cập nhật mức lương của nhân viên theo id
         4. Tìm kiếm nhân viên theo tên
         5. Thoát
         Mời bạn nhập lựa chọn `
    );

    switch (choice) {
        case 1:
            const id = parseInt(prompt("Nhập ID nhân viên:"));
            if (employees.some(emp => emp.id === id)) {
                console.log("ID đã tồn tại, vui lòng nhập ID khác!");
            } else {
                const name = prompt("Nhập tên nhân viên:");
                const position = prompt("Nhập vị trí:");
                const salary = parseInt(prompt("Nhập lương:"));
                employees.push({ id, name, position, salary });
                console.log("Đã thêm nhân viên:", { id, name, position, salary });
            }
            break
        case 2:
            const deleteId = parseInt(prompt("Nhập ID nhân viên cần xóa:"));
            const employeeIndex = employees.findIndex(emp => emp.id === deleteId);
            if (employeeIndex !== -1) {
                const confirmDelete = confirm(`Bạn có chắc muốn xóa ${employees[employeeIndex].name} không?`);
                if (confirmDelete) {
                    employees.splice(employeeIndex, 1);
                    console.log("Đã xóa nhân viên với ID:", deleteId);
                } else {
                    console.log("Hủy xóa nhân viên.");
                }
            } else {
                console.log("Không tìm thấy nhân viên với ID:", deleteId);
            }
            break;
        case 3:
            const updateId = parseInt(prompt("Nhập ID nhân viên cần cập nhật lương:"));
            const employee = employees.find(emp => emp.id === updateId);
            if (employee) {
                const newSalary = parseInt(prompt(`Nhập lương mới cho ${employee.name}:`));
                employee.salary = newSalary;
                console.log("Đã cập nhật lương:", employee);
            } else {
                console.log("Không tìm thấy nhân viên với ID:", updateId);
            }
            break;

        case 4:
            const searchName = prompt("Nhập tên cần tìm:");
            const results = employees.filter(emp => emp.name.toLowerCase().includes(searchName.toLowerCase())
            );
            if (results.length > 0) {
                console.log("Kết quả tìm kiếm:", results);
            } else {
                console.log("Không tìm thấy nhân viên nào với tên:", searchName);
            }
            break;
        case 5:
            loop = false;
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }
}