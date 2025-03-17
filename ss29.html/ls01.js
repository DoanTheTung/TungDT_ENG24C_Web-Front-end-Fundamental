let menu = `
------- CONTACT APP ------
1. Thêm đối tượng Contact vào danh sách liên hệ.
2. Hiển thị danh sách danh bạ.
3. Tìm kiếm thông tin Contact theo số điện thoại.
4. Cập nhật thông tin Contact (name, email, phone) theo id.
5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.
6. Thoát.
Lựa chọn của bạn là: 
`;

let contacts = [];
let idCounter = 1;
let loop = true;

while (loop) {
    let choice = +prompt(menu);
    switch (choice) {
        case 1: // Thêm Contact
            addContact();
            break;
        case 2: // Hiển thị danh sách
            displayContacts();
            break;
        case 3: // Tìm kiếm theo số điện thoại
            searchContact();
            break;
        case 4: // Cập nhật Contact theo ID
            updateContact();
            break;
        case 5: // Xóa Contact theo ID
            deleteContact();
            break;
        case 6: // Thoát chương trình
            alert("Cảm ơn bạn đã sử dụng ứng dụng!");
            loop = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ! Vui lòng nhập lại!");
            break;
    }
}
function addContact() {
    let name = prompt("Nhập tên:");
    let email = prompt("Nhập email:");
    let phone = prompt("Nhập số điện thoại:");
    if (!name || !email || !phone) {
        alert("Thông tin không hợp lệ, vui lòng nhập lại!");
        return;
    }
    let contact = {
        id: idCounter++,
        name,
        email,
        phone
    };
    contacts.push(contact);
    alert("Thêm danh bạ thành công!");
}
function displayContacts() {
    if (contacts.length === 0) {
        alert("Danh bạ trống!");
        return;
    }
    let contactList = "Danh sách danh bạ:\n";
    contacts.forEach(contact => {
        contactList += `ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}\n`;
    });
    alert(contactList);
}
function searchContact() {
    let phone = prompt("Nhập số điện thoại cần tìm:");
    let foundContact = contacts.find(contact => contact.phone === phone);
    if (foundContact) {
        alert(`Thông tin tìm thấy:\nID: ${foundContact.id}\nName: ${foundContact.name}\nEmail: ${foundContact.email}\nPhone: ${foundContact.phone}`);
    } else {
        alert("Không tìm thấy danh bạ!");
    }
}
function updateContact() {
    let id = +prompt("Nhập ID của Contact cần cập nhật:");
    let contactIndex = contacts.findIndex(contact => contact.id === id);
    if (contactIndex === -1) {
        alert("Không tìm thấy danh bạ với ID này!");
        return;
    }
    let newName = prompt("Nhập tên mới (bỏ trống nếu không thay đổi):", contacts[contactIndex].name);
    let newEmail = prompt("Nhập email mới (bỏ trống nếu không thay đổi):", contacts[contactIndex].email);
    let newPhone = prompt("Nhập số điện thoại mới (bỏ trống nếu không thay đổi):", contacts[contactIndex].phone);
    contacts[contactIndex].name = newName || contacts[contactIndex].name;
    contacts[contactIndex].email = newEmail || contacts[contactIndex].email;
    contacts[contactIndex].phone = newPhone || contacts[contactIndex].phone;
    alert("Cập nhật danh bạ thành công!");
}
function deleteContact() {
    let id = +prompt("Nhập ID của Contact cần xóa:");
    let contactIndex = contacts.findIndex(contact => contact.id === id);
    if (contactIndex === -1) {
        alert("Không tìm thấy danh bạ với ID này!");
        return;
    }
    contacts.splice(contactIndex, 1);
    alert("Xóa danh bạ thành công!");
}
