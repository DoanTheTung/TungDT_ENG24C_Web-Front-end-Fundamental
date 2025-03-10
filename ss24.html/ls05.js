let arr = [];
let choice;
let loop = true;
let menu = `
 ================== MENU ===================
 1. Nhập mảng 2 chiều
 2. Hiển thị mảng 2 chiều
 3. Tính tổng các phần tử trong mảng
 4. Tính tổng đường chéo chính
 5. Tính tổng đường chéo phụ
 6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)
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
            } else if (arr.length !== arr[0].length) {
                console.log("Mảng không phải ma trận vuông không có đường chéo chính");
            } else {
                let sumMainDiagonal = 0;
                for (let i = 0; i < arr.length; i++) {
                    sumMainDiagonal += arr[i][i];
                }
                console.log(`Tổng đường chéo chính: ${sumMainDiagonal}`);
            }
            break;
        case 5:
            if (arr.length === 0) {
                console.log("Mảng không có phần tử");
            } else if (arr.length !== arr[0].length) {
                console.log("Mảng không phải ma trận vuông, không có đường chéo phụ!");
            } else {
                let sumSecondaryDiagonal = 0;
                for (let i = 0; i < arr.length; i++) {
                    sumSecondaryDiagonal += arr[i][arr.length - 1 - i];
                }
                console.log(`Tổng đường chéo phụ: ${sumSecondaryDiagonal}`);
            }
            break;
        case 6:
            if (arr.length === 0) {
                console.log("Mảng không có phần tử");
            } else {
                let option = +prompt("Chọn 1 để tính trung bình hàng, 2 để tính trung bình cột: ");
                if (option === 1) {
                    let row = +prompt(`Nhập số hàng cần tính (0-${arr.length - 1}): `);
                    if (row < 0 || row >= arr.length) {
                        console.log("Hàng không hợp lệ!");
                    } else {
                        let sum = 0;
                        for (let j = 0; j < arr[row].length; j++) {
                            sum += arr[row][j];
                        }
                        let avg = sum / arr[row].length;
                        console.log(`Trung bình cộng hàng ${row}: ${avg}`);
                    }
                } else if (option === 2) {
                    let col = +prompt(`Nhập số cột cần tính (0-${arr[0].length - 1}): `);
                    if (col < 0 || col >= arr[0].length) {
                        console.log("Cột không hợp lệ!");
                    } else {
                        let sum = 0;
                        for (let i = 0; i < arr.length; i++) {
                            sum += arr[i][col];
                        }
                        let avg = sum / arr.length;
                        console.log(`Trung bình cộng cột ${col}: ${avg}`);
                    }
                } else {
                    console.log("Lựa chọn không hợp lệ, chỉ chọn 1 hoặc 2!");
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