let str = "";
let choice;
let loop = true;
let menu = `
 ================== MENU ===================
 1. Nhập chuỗi
 2. Hiển thị chuỗi
 3. Loại bỏ khoảng trắng đầu và cuối chuỗi
 4. Đảo ngược chuỗi ký tự
 5. Đếm số lượng từ trong chuỗi
 6. Tìm kiếm và thay thế ký tự
 7. Thoát chương trình
 ===========================================
 
 Lựa chọn của bạn là: `;

while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            str = prompt("Nhập chuỗi của bạn: ");
            console.log("Đã nhập chuỗi thành công");
            break;

        case 2:
            if (str === "") {
                console.log("Chuỗi chưa được nhập!");
            } else {
                console.log(`Chuỗi: "${str}"`);
            }
            break;
        case 3:
            if (str === "") {
                console.log("Chuỗi chưa được nhập!");
            } else {
                str = str.trim();
                console.log(`Chuỗi sau khi loại bỏ khoảng trắng: "${str}"`);
            }
            break;
        case 4:
            if (str === "") {
                console.log("Chuỗi chưa được nhập!");
            } else {
                let charArray = str.split("");
                let reversedArray = [];
                for (let i = charArray.length - 1; i >= 0; i--) {
                    reversedArray.push(charArray[i]);
                }
                str = reversedArray.join("");
                console.log(`Chuỗi sau khi đảo ngược: "${str}"`);
            }
            break;
        case 5:
            if (str === "") {
                console.log("Chuỗi chưa được nhập!");
            } else {
                let words = str.trim().split(/\s+/);
                let wordCount = words.length;
                if (str.trim() === "") {
                    wordCount = 0;
                }
                console.log(`Số lượng từ trong chuỗi: ${wordCount}`);
            }
            break;
        case 6:
            if (str === "") {
                console.log("Chuỗi chưa được nhập!");
            } else {
                let searchChar = prompt("Nhập ký tự cần tìm: ");
                let charArray = str.split("");
                let found = false;
                for (let i = 0; i < charArray.length; i++) {
                    if (charArray[i] === searchChar) {
                        found = true;
                        break;
                    }
                }
                if (found) {
                    console.log(`Tìm thấy ký tự '${searchChar}' trong chuỗi`);
                    let replaceChar = prompt("Nhập ký tự thay thế: ");
                    for (let i = 0; i < charArray.length; i++) {
                        if (charArray[i] === searchChar) {
                            charArray[i] = replaceChar;
                        }
                    }
                    str = charArray.join("");
                    console.log(`Chuỗi sau khi thay thế: "${str}"`);
                } else {
                    console.log(`Không tìm thấy ký tự '${searchChar}' trong chuỗi`);
                }
            }
            break;
        case 7:
            console.log("Kết thúc chương trình. Cảm ơn!");
            loop = false;
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            break;
    }
}