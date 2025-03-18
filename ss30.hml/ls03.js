const store = [
    {
        id: 1,
        name: "iPhone 14",
        price: 20000000,
        quantity: 10,
        company: "Apple"
    },
    {
        id: 2,
        name: "Samsung Galaxy S23",
        price: 18000000,
        quantity: 8,
        company: "Samsung"
    },
    {
        id: 3,
        name: "Xiaomi Redmi Note 12",
        price: 8000000,
        quantity: 15,
        company: "Xiaomi"
    },
    {
        id: 4,
        name: "iPhone 13",
        price: 17000000,
        quantity: 5,
        company: "Apple"
    },
    {
        id: 5,
        name: "Samsung Galaxy A54",
        price: 10000000,
        quantity: 12,
        company: "Samsung"
    },
    {
        id: 6,
        name: "Xiaomi redmi Note 13",
        price: 5000000,
        quantity: 20,
        company: "Xiaomi"
    }
];
let cart = [];
let menu = `
--------------------MENU--------------------
1. Hiển thị danh sách điện thoại theo hãng
2. Thêm điện thoại mới vào cửa hàng
3. Tìm kiếm điện thoại theo tên hoặc id
4. Mua điện thoại (Nhập id và số lượng)
5. Thoát chương trình
--------------------------------------------
Lựa chọn của bạn là: 
`;
let choice = 0;
let loop = true;
while (loop) {
    let choice = +prompt(menu);
    switch (choice) {
        case 1://hiện thị danh sách điện thoại 
            displayPhonesByCompany();
            break;
        case 2://thêm điện thoại
            addPhone();
            break;
        case 3://tìm kiếm điện thoại theo tên hoặc id
            searchPhone();
            break;
        case 4://mua điện thoại
            buyPhone();
            break;
        case 5://thoát chương trình
            alert("Thank you for purchasing a product from our store.");
            loop = false;
            break;
        default:
            alert("lựa chọn không phù hợp! vui lòng nhập lại!");
            break;
    }
}
function displayPhonesByCompany() {
    let company = prompt("Nhập tên hãng điện thoại (VD: Apple, Samsung, Xiaomi):").toLowerCase();
    let phones = store.filter(phone => phone.company.toLowerCase() === company);
    if (phones.length === 0) {
        alert("Không có điện thoại thuộc hãng này!");
        return;
    }
    let result = `Danh sách điện thoại hãng "${company}":\n`;
    phones.forEach(phone => {
        result += `ID: ${phone.id}, Name: ${phone.name}, Price: ${phone.price}, Quantity: ${phone.quantity}\n`;
    });
    alert(result);
}
function addPhone() {
    let id = store.length + 1;
    let name = prompt("Nhập tên điện thoại:");
    let price = +prompt("Nhập giá điện thoại:");
    let quantity = +prompt("Nhập số lượng:");
    let company = prompt("Nhập hãng điện thoại:");
    let newPhone = { id, name, price, quantity, company };
    store.push(newPhone);
    alert("Thêm điện thoại thành công!");
}
function searchPhone() {
    let keyword = prompt("Nhập tên hoặc ID điện thoại để tìm:");
    let phones = store.filter(phone =>
        phone.name.toLowerCase().includes(keyword.toLowerCase()) || phone.id.toString() === keyword
    );
    if (phones.length === 0) {
        alert("Không tìm thấy điện thoại!");
        return;
    }
    let result = "📱 Kết quả tìm kiếm:\n";
    phones.forEach(phone => {
        result += `ID: ${phone.id}, Name: ${phone.name}, Price: ${phone.price}, Quantity: ${phone.quantity}\n`;
    });
    alert(result);
}
function buyPhone() {
    let phoneId = +prompt("Nhập ID điện thoại muốn mua:");
    let phone = store.find(p => p.id === phoneId);
    if (!phone) {
        alert("Điện thoại không tồn tại!");
        return;
    }
    let buyQuantity = +prompt(`Nhập số lượng muốn mua (Hiện có: ${phone.quantity}):`);
    if (buyQuantity <= 0 || buyQuantity > phone.quantity) {
        alert("Số lượng không hợp lệ!");
        return;
    }
    let cartItem = cart.find(item => item.id === phoneId);
    if (cartItem) {
        cartItem.quantity += buyQuantity;
    } else {
        cart.push({ ...phone, quantity: buyQuantity });
    }
    phone.quantity -= buyQuantity;
    alert("Mua điện thoại thành công!");
}
