let arr = [];
let choice;
let loop = true;
let menu = `
 ================== MENU ===================
 1. Nhập mảng 2 chiều
 2. Hiển thị mảng 2 chiều
 3. Tính tổng các phần tử trong mảng
 4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
 5. Tính trung bình cộng các phần tử của một hàng cụ thể
 6. Đảo ngược các hàng trong mảng
 7. Thoát chương trình
 ===========================================
 
 Lựa chọn của bạn là: `;
 
while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let rows = +prompt("Nhập số hàng: ");
            let cols = +prompt("Nhập số cột: ");
            arr = [];
            for (let i = 0; i < rows; i = i + 1) {
                let row = [];
                for (let j = 0; j < cols; j = j + 1) {
                    row[j] = +prompt(`Nhập phần tử [${i}][${j}]: `);
                }
                arr.push(row);
            }
            console.log("Đã nhập mảng thành công");
            break;
        case 2:
            if (arr.length === 0) {
                console.log("Mảng không có phần tử");
            } else {
                console.log("Mảng 2 chiều:");
                for (let i = 0; i < arr.length; i++) {
                    console.log(arr[i].join("\t"));
                }
            }
            break;
        case 3:
            if (arr.length === 0) {
                console.log("Mảng không có phần tử");
            } else {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        sum += arr[i][j];
                    }
                }
                console.log(`Tổng các phần tử trong mảng: ${sum}`);
            }
            break;
        case 4:
            if (arr.length === 0) {
                console.log("Mảng không có phần tử");
            } else {
                let max = arr[0][0];
                let maxRow = 0;
                let maxCol = 0;
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i][j]; j++) {
                        if (arr[i][j] > max) {
                            max = arr[i][j];
                            maxRow = i;
                            maxCol = j;
                        }
                    }
                }
                console.log(`Phần tử lớn nhất: ${max} tại vị trí [${maxRow}][${maxCol}]`);
            }
            break;
        case 5:
            if (arr.length === 0) {
                console.log("Mảng không có phần tử");
            } else {
                let row = +prompt(`Nhập số hàng cần tính trung bình (0-${arr.length - 1}): `);
                if (row < 0 || row >= arr.length) {
                    console.log("Số hàng không hợp lệ");
                } else {
                    let sum = 0;
                    for (let j = 0; j < arr[row].length; j++) {
                        sum += arr[row][j];
                    }
                    let avg = sum / arr[row].length;
                    console.log(`Trung bình cộng hàng ${row}: ${avg}`);
                }
            }
            break;
        case 6:
            if (arr.length === 0) {
                console.log("Mảng không có phần tử");
            } else {
                arr.reverse();
                console.log("Đã đảo ngược các hàng!");
                console.log("Mảng sau khi đảo ngược:");
                for (let i = 0; i < arr.length; i++) {
                    console.log(arr[i].join("\t"));
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