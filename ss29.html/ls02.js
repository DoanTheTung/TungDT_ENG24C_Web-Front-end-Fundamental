let menu = `
----- MENU -----
1. Thêm sản phẩm vào danh sách sản phẩm.
2. Hiển thị tất cả sản phẩm.
3. Hiển thị chi tiết sản phẩm theo ID.
4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo ID sản phẩm.
5. Xóa sản phẩm theo ID.
6. Lọc sản phẩm theo khoảng giá.
7. Thoát.
Lựa chọn của bạn là: 
`;

let store = []; // Mảng lưu danh sách sản phẩm
let idCounter = 1; // ID tự động tăng

let loop = true;
while (loop) {
    let choice = +prompt(menu);
    switch (choice) {
        case 1: // Thêm sản phẩm
            addProduct();
            break;
        case 2: // Hiển thị tất cả sản phẩm
            displayProducts();
            break;
        case 3: // Hiển thị chi tiết sản phẩm theo ID
            displayOneProduct();
            break;
        case 4: // Cập nhật sản phẩm theo ID
            updateProduct();
            break;
        case 5: // Xóa sản phẩm theo ID
            deleteProduct();
            break;
        case 6: // Lọc sản phẩm theo khoảng giá
            filterProducts();
            break;
        case 7: // Thoát
            alert("Cảm ơn bạn đã sử dụng ứng dụng!");
            loop = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ! Vui lòng nhập lại!");
            break;
    }
}
function addProduct() {
    let name = prompt("Nhập tên sản phẩm:");
    let price = +prompt("Nhập giá sản phẩm:");
    let category = prompt("Nhập danh mục sản phẩm:");
    let quantity = +prompt("Nhập số lượng sản phẩm:");
    if (!name || price <= 0 || !category || quantity < 0) {
        alert("Thông tin không hợp lệ, vui lòng nhập lại!");
        return;
    }
    let product = {
        id: idCounter++,
        name,
        price,
        category,
        quantity
    };
    store.push(product);
    alert("Thêm sản phẩm thành công!");
}
function displayProducts() {
    if (store.length === 0) {
        alert("Danh sách sản phẩm trống!");
        return;
    }
    let productList = "Danh sách sản phẩm:\n";
    store.forEach(product => {
        productList += `ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Category: ${product.category}, Quantity: ${product.quantity}\n`;
    });
    alert(productList);
}
function displayOneProduct() {
    let id = +prompt("Nhập ID sản phẩm cần xem chi tiết:");
    let foundProduct = store.find(product => product.id === id);
    if (foundProduct) {
        alert(`Thông tin sản phẩm:
ID: ${foundProduct.id},
Name: ${foundProduct.name},
Price: ${foundProduct.price},
Category: ${foundProduct.category},
Quantity: ${foundProduct.quantity}`);
    } else {
        alert("Không tìm thấy sản phẩm!");
    }
}
function updateProduct() {
    let id = +prompt("Nhập ID sản phẩm cần cập nhật:");
    let productIndex = store.findIndex(product => product.id === id);
    if (productIndex === -1) {
        alert("Không tìm thấy sản phẩm!");
        return;
    }
    let newName = prompt("Nhập tên mới (bỏ trống nếu không thay đổi):", store[productIndex].name);
    let newPrice = +prompt("Nhập giá mới (bỏ trống nếu không thay đổi):", store[productIndex].price);
    let newCategory = prompt("Nhập danh mục mới (bỏ trống nếu không thay đổi):", store[productIndex].category);
    let newQuantity = +prompt("Nhập số lượng mới (bỏ trống nếu không thay đổi):", store[productIndex].quantity);
    store[productIndex].name = newName || store[productIndex].name;
    store[productIndex].price = newPrice || store[productIndex].price;
    store[productIndex].category = newCategory || store[productIndex].category;
    store[productIndex].quantity = newQuantity || store[productIndex].quantity;
    alert("Cập nhật sản phẩm thành công!");
}
function deleteProduct() {
    let id = +prompt("Nhập ID sản phẩm cần xóa:");
    let productIndex = store.findIndex(product => product.id === id);
    if (productIndex === -1) {
        alert("Không tìm thấy sản phẩm!");
        return;
    }
    store.splice(productIndex, 1);
    alert("Xóa sản phẩm thành công!");
}
function filterProducts() {
    let minPrice = +prompt("Nhập giá tối thiểu:");
    let maxPrice = +prompt("Nhập giá tối đa:");
    if (minPrice > maxPrice || minPrice < 0 || maxPrice < 0) {
        alert("Khoảng giá không hợp lệ!");
        return;
    }
    let filtered = store.filter(product => product.price >= minPrice && product.price <= maxPrice);
    if (filtered.length === 0) {
        alert("Không có sản phẩm nào trong khoảng giá này!");
        return;
    }
    let result = "Danh sách sản phẩm trong khoảng giá:\n";
    filtered.forEach(product => {
        result += `ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Category: ${product.category}, Quantity: ${product.quantity}\n`;
    });
    alert(result);
}
