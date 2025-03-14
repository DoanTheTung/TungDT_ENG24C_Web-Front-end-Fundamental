let array = [];
let loop = true;
let n = +prompt("Nhập số lượng sinh viên cho danh sách: ");
let choice;
let menu = `
===== MENU QUẢN LÝ SINH VIÊN =====
1.Nhập thông tin sinh viên
2.Hiện thị danh sách sinh viên
3.Tìm sinh viên(theo tên)
4.Xoá sinh viên khỏi danh sách
5.Thoát
Lựa chọn của bạn là: `;

function information() {
    if (n <= 0) {
        alert("số lượng sinh viên không hợp lệ! vui lòng nhập lại!")
    } else {
        for (let i = 0; i < n; i++) {
            let fullName = prompt("nhập họ và tên của sinh viên: ");
            array.push(fullName);
        }
    }
}
function search() {
    let searchName = prompt("Nhập tên sinh viên cần tìm:");
    let foundStudents = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].toLowerCase() === searchName.toLowerCase()) {
            foundStudents.push(students[i]);
        }
    }

    if (foundStudents.length > 0) {
        alert("Các sinh viên tìm thấy:\n" + foundStudents);
    } else {
        alert("Không tìm thấy sinh viên trong danh sách.");
    }

}
function deleteStudent() {
    let deleteName = prompt("Nhập tên sinh viên cần xóa: ");
    let index = -1;

    for (let i = 0; i < students.length; i++) {
        if (students[i].toLowerCase() === deleteName.toLowerCase()) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        students.splice(index, 1);
        alert("Đã xóa sinh viên thành công!");
    } else {
        alert("Không tìm thấy sinh viên để xóa.");
    }
}

while (loop) {
    let choice = +prompt(menu);
    switch (choice) {
        case 1://nhập thông tin sinh viên
            information();
            alert("nhập thông tin thành công");
            break;
        case 2://hiện thị danh sách sinh viên
            alert("danh sách sinh viên: " + array);
            break;
        case 3://tìm kiếm sinh viên theo tên
            search();
            break;
        case 4://xoá sinh viên
            deleteStudent()
            break;
        case 5://thoát chương trình
            alert("kết thúc chương trình!!");
            loop = false;
            break;
        default:
            alert("lựa chọn không hợp lệ! vui lòng chọn lại");
            break;
    }
}