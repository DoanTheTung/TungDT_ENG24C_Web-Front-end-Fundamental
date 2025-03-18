const library = [
    {
        id: 1,
        name: "Dragon Ball",
        price: 10000,
        quantity: 20,
        category: "truyện tranh"
    },
    {
        id: 2,
        name: "Hai đứa trẻ",
        price: 18999,
        quantity: 15,
        category: "truyện ngắn"
    },
    {
        id: 3,
        name: "Không gia đình",
        price: 25000,
        quantity: 20,
        category: "tiểu thuyết"
    },
    {
        id: 4,
        name: "Trăm năm cô đơn",
        price: 25000,
        quantity: 29,
        category: "tiểu thuyết"
    },
    {
        id: 5,
        name: "Trạng Tý",
        price: 10000,
        quantity: 30,
        category: "truyện tranh"
    },
    {
        id: 6,
        name: "Hạnh phúc của một tang gia",
        price: 14999,
        quantity: 25,
        category: "truyện ngắn"
    }
];

let cart = [];

let menu = `
------------------------------MENU----------------------------------
1. Hiển thị danh sách sách theo thể loại
2. Thêm sách mới vào kho
3. Tìm kiếm sách theo tên hoặc id
4. Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho)
5. Sắp xếp sách theo giá (Tăng dần/Giảm dần)
6. Tính tổng số lượng sách đã mua và tổng tiền trong giỏ hàng
7. Hiển thị tổng số lượng sách trong kho
8. Thoát chương trình
--------------------------------------------------------------------
Lựa chọn của bạn là: 
`;

let loop = true;
while (loop) {
    let choice = +prompt(menu);
    switch (choice) {
        case 1://hiển thị danh sách theo thể loại
            displayBooks();
            break;
        case 2://thêm sách mới
            addBooks();
            break;
        case 3://tìm kiếm sách theo tên hoặc id
            searchBooks();
            break;
        case 4://mua sách
            buyBooks();
            break;
        case 5://sắp xếp sách theo giá
            sortBooks();
            break;
        case 6://tính tổng số lượng sách đã mua
            sumBook();
            break;
        case 7://hiển thị tổng số lượng sách trong kho
            quantityInStock();
            break;
        case 8://thoát chương trình
            alert("Thank you for purchasing and reading our book.");
            loop = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ! Vui lòng nhập lại!");
            break;
    }
}
function displayBooks() {
    let category = prompt("Nhập thể loại sách bạn muốn tìm: (VD: truyện tranh, tiểu thuyết, truyện ngắn)").toLowerCase();
    let books = library.filter(book => book.category.toLowerCase() === category);
    if (books.length === 0) {
        alert("Không có sách thuộc thể loại này!");
        return;
    }
    let result = `Danh sách sách thuộc thể loại "${category}":\n`;
    books.forEach(book => {
        result += `ID: ${book.id}, Name: ${book.name}, Price: ${book.price}, Quantity: ${book.quantity}\n`;
    });
    alert(result);
}
function addBooks() {
    let name = prompt("Nhập tên sách mới:");
    let price = +prompt("Nhập giá sách:");
    let quantity = +prompt("Nhập số lượng sách:");
    let category = prompt("Nhập thể loại sách:");
    let newBook = {
        id: library.length + 1,
        name,
        price,
        quantity,
        category
    };
    library.push(newBook);
    alert("Thêm sách thành công!");
}
function searchBooks() {
    let keyword = prompt("Nhập tên hoặc ID sách để tìm:");
    let books = library.filter(book =>
        book.name.toLowerCase().includes(keyword.toLowerCase()) || book.id.toString() === keyword
    );
    if (books.length === 0) {
        alert("Không tìm thấy sách!");
        return;
    }
    let result = "Kết quả tìm kiếm:\n";
    books.forEach(book => {
        result += `ID: ${book.id}, Name: ${book.name}, Price: ${book.price}, Quantity: ${book.quantity}\n`;
    });
    alert(result);
}
function buyBooks() {
    let bookId = +prompt("Nhập ID sách muốn mua:");
    let book = library.find(b => b.id === bookId);
    if (!book) {
        alert("Sách không tồn tại!");
        return;
    }
    let buyQuantity = +prompt(`Nhập số lượng muốn mua (Hiện có: ${book.quantity}):`);
    if (buyQuantity <= 0 || buyQuantity > book.quantity) {
        alert("Số lượng không hợp lệ!");
        return;
    }
    let cartItem = cart.find(item => item.id === bookId);
    if (cartItem) {
        cartItem.quantity += buyQuantity;
    } else {
        cart.push({ ...book, quantity: buyQuantity });
    }
    book.quantity -= buyQuantity;
    alert("Mua sách thành công!");
}
function sortBooks() {
    let sortOption = prompt("Chọn cách sắp xếp:\n1. Giá tăng dần\n2. Giá giảm dần");
    if (sortOption === "1") {
        library.sort((a, b) => a.price - b.price);
    } else if (sortOption === "2") {
        library.sort((a, b) => b.price - a.price);
    } else {
        alert("Lựa chọn không hợp lệ!");
        return;
    }
    let result = "Danh sách sách sau khi sắp xếp:\n";
    library.forEach(book => {
        result += `ID: ${book.id}, Name: ${book.name}, Price: ${book.price}, Quantity: ${book.quantity}\n`;
    });
    alert(result);
}
function sumBook() {
    if (cart.length === 0) {
        alert("Giỏ hàng đang trống!");
        return;
    }
    let totalBooks = cart.reduce((sum, item) => sum + item.quantity, 0);
    let totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    alert(`Tổng số sách đã mua: ${totalBooks}\n Tổng tiền thanh toán: ${totalPrice.toLocaleString()} VNĐ`);
}
function quantityInStock() {
    let totalStock = library.reduce((sum, book) => sum + book.quantity, 0);
    alert(`Tổng số sách còn lại trong kho: ${totalStock}`);
}
