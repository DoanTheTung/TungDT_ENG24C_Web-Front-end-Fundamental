const products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
];
let cart = [];
let menu = `
    --------------------MENU-------------------------
    1.hiển thị sản phẩm theo tên danh mục
    2.chọn sản phẩm để mua bằng cách nhập id sản phẩm
    3.sắp xếp các sản phẩm theo giá
    4.tính số tiền thanh toán trong giỏ hàng
    5.thoát
    -------------------------------------------------
    Lựa chọn của bạn là: 
`;
let loop = true;
while (loop) {
    let choice = +prompt(menu);
    switch (choice) {
        case 1://hiển thị sản phẩm theo tên danh mục
            displayProductsByCategory();
            break;
        case 2://chọn sản phẩm để mua
            addToCart();
            break;
        case 3://sắp xếp các sản phẩm theo giá
            sortProductsByPrice();
            break;
        case 4://thanh toán tiền trong giỏ hàng
            calculateTotal();
            break;
        case 5://thoát
            alert("Thank you for purchasing a product from our store.");
            loop = false;
            break;
        default:
            alert("lựa chọn không hợp lệ! Vui lòng nhập lại");
            break;
    }
}
function displayProductsByCategory() {
    let categoryName = prompt("Nhập tên danh mục muốn tìm (VD: món ăn dân tộc Mông, món ăn dân tộc Kinh):");
    let filteredProducts = products.filter(product => product.category.toLowerCase() === categoryName.toLowerCase());
    if (filteredProducts.length === 0) {
        alert("Không có sản phẩm nào thuộc danh mục này!");
        return;
    }
    let result = `Danh sách sản phẩm trong danh mục "${categoryName}":\n`;
    filteredProducts.forEach(product => {
        result += `ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}\n`;
    });
    alert(result);
}
function addToCart() {
    let productId = +prompt("nhập id sản phẩm bạn muốn mua: ");
    let product = products.find(p => p.id === productId);
    if (!product) {
        alert("Sản phẩm không tồn tại trong menu! vui lòng nhập lại!");
        return;
    }
    let buyQuantity = +prompt(`Nhập số lượng muốn mua (Hiện có: ${product.quantity}):`);
    if (buyQuantity <= 0) {
        alert("Số lượng không hợp lệ! vui lòng nhập lại!");
        return;
    }
    if (buyQuantity > product.quantity) {
        alert("số lượng sản phẩm trong cửa hàng không đủ! Vui lòng nhập số lượng sản phẩm phù hợp!");
        return
    }
    let cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += buyQuantity;
    } else {
        cart.push({ ...product, quantity: buyQuantity });
    }
    product.quantity -= buyQuantity;
    alert("Thêm vào giỏ hàng thành công!");
}
function sortProductsByPrice() {
    let sortOption = prompt(
        "Chọn cách sắp xếp giá:\n 1. Tăng dần\n 2. Giảm dần");
    if (sortOption === "1") {
        products.sort((a, b) => a.price - b.price);
    } else if (sortOption === "2") {
        products.sort((a, b) => b.price - a.price);
    } else {
        alert("Lựa chọn không hợp lệ!");
        return;
    }
    let result = "Danh sách sản phẩm sau khi sắp xếp:\n";
    products.forEach(product => {
        result += `ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}\n`;
    });
    alert(result);
}
function calculateTotal() {
    if (cart.length === 0) {
        alert("Giỏ hàng đang trống!");
        return;
    }
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert(`Tổng số tiền thanh toán: ${total.toLocaleString()} VNĐ`);
}