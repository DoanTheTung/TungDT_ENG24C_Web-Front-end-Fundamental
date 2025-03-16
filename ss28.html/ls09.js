let books = [];
let loop = true;
let choice = 0;

while (loop) {
    let choice = +prompt(
        `
        -----MENU-----
         1. Thêm sách mới
         2. Hiển thị danh sách sách
         3. Tìm kiếm sách theo tiêu đề
         4. Cập nhật trạng thái mượn/trả sách theo id
         5. Xóa sách theo id
         6. Sắp xếp sách theo giá tăng dần
         7. Thoát
         Mời bạn nhập lựa chọn `
    );
    switch (choice) {
        case 1:
            const id = parseInt(prompt("Nhập ID sách:"));
            if (books.some(book => book.id === id)) {
                console.log("ID đã tồn tại, vui lòng nhập ID khác!");
            } else {
                const title = prompt("Nhập tiêu đề sách:");
                const author = prompt("Nhập tên tác giả:");
                const year = parseInt(prompt("Nhập năm xuất bản:"));
                const price = parseInt(prompt("Nhập giá sách:"));
                const isAvailable = true;
                books.push({ id, title, author, year, price, isAvailable });
                console.log("Đã thêm sách:", { id, title, author, year, price, isAvailable });
            }
            break;
        case 2:
            if (books.length > 0) {
                console.log("Danh sách sách hiện tại:", books);
            } else {
                console.log("Danh sách sách hiện đang rỗng!");
            }
            break;
        case 3:
            const searchTitle = prompt("Nhập tiêu đề cần tìm:");
            const searchResults = books.filter(book => book.title.toLowerCase().includes(searchTitle.toLowerCase())
            );
            if (searchResults.length > 0) {
                console.log("Kết quả tìm kiếm:", searchResults);
            } else {
                console.log("Không tìm thấy sách nào với tiêu đề:", searchTitle);
            }
            break;
        case 4:
            const updateId = parseInt(prompt("Nhập ID sách cần cập nhật trạng thái:"));
            const bookToUpdate = books.find(book => book.id === updateId);
            if (bookToUpdate) {
                const status = prompt(`Sách "${bookToUpdate.title}" hiện ${bookToUpdate.isAvailable ? "có sẵn" : "đã mượn"}. Nhập "true" để đặt có sẵn, "false" để đặt đã mượn:`);
                bookToUpdate.isAvailable = status.toLowerCase() === "true";
                console.log("Đã cập nhật trạng thái:", bookToUpdate);
            } else {
                console.log("Không tìm thấy sách với ID:", updateId);
            }
            break;
        case 5:
            const deleteId = parseInt(prompt("Nhập ID sách cần xóa:"));
            const bookIndex = books.findIndex(book => book.id === deleteId);
            if (bookIndex !== -1) {
                const confirmDelete = confirm(`Bạn có chắc muốn xóa "${books[bookIndex].title}" không?`);
                if (confirmDelete) {
                    books.splice(bookIndex, 1)
                    console.log("Đã xóa sách với ID:", deleteId);
                } else {
                    console.log("Hủy xóa sách.");
                }
            } else {
                console.log("Không tìm thấy sách với ID:", deleteId);
            }
            break;
        case 6:
            books.sort((a, b) => a.price - b.price);
            console.log("Danh sách sách sau khi sắp xếp theo giá tăng dần:", books);
            break;
        case 7:
            loop = false;
            console.log("Thoát chương trình.");
            break
        default:
            console.log("Lựa chọn không hợp lệ!");
            break;
    }
}