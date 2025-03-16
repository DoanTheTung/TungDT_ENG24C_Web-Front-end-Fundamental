let loop = true;
let arr = [];
let menu = `
 ======== MENU SỐ NGUYÊN =======
 1. Nhập danh sách số nguyên
 2. Tính trung bình các số
 3. Tìm số chẵn lớn nhất
 4. Tìm số lẻ nhỏ nhất
 5. Thoát
 ===============================
 
 Lựa chọn của bạn là gì?
 `;

while (loop) {
    let choice = +prompt(menu);
    switch (choice) {
        case 1:
            arr = [];
            let n = +prompt("Nhập số lượng số nguyên: ");
            if (n > 0 && n * 1 === n) {
                for (let i = 0; i < n; i = i + 1) {
                    let num = +prompt("Nhập số nguyên thứ " + (i + 1) + ": ");
                    if (num * 1 === num) {
                        arr[i] = num;
                    } else {
                        console.log("dữ liệu ko hợp lệ");
                        i = i - 1;
                    }
                }
                console.log("thêm danh sách thành công");
            } else {
                console.log("Số lượng không hợp lệ!");
            }
            break;

        case 2:
            if (arr.length === 0) {
                console.log("mảng ko có phần tử");
            } else {
                let sum = 0;
                for (let i = 0; i < arr.length; i = i + 1) {
                    sum = sum + arr[i];
                }
                let avg = sum / arr.length;
                console.log("Trung bình: " + avg);
            }
            break;
        case 3:
            if (arr.length === 0) {
                console.log("Mảng không có phần tử");
            } else {
                let maxEven = -1;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 2 === 0) {
                        if (maxEven === -1 || arr[i] > maxEven) {
                            maxEven = arr[i];
                        }
                    }
                }
                if (maxEven === -1) {
                    console.log("Không có số chẵn!");
                } else {
                    console.log("Số chẵn lớn nhất: " + maxEven);
                }
            }
            break;

        case 4:
            if (arr.length === 0) {
                console.log("Mảng không có phần tử");
            } else {
                let minOdd = -1;
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] % 2 !== 0) {
                        if (minOdd === -1 || arr[i] < minOdd) {
                            minOdd = arr[i];
                        }
                    }
                }
                if (minOdd === -1) {
                    console.log("Không có số lẻ!");
                } else {
                    console.log("Số lẻ nhỏ nhất: " + minOdd);
                }
            }
            break;

        case 5:
            console.log("Kết thúc chương trình. Cảm ơn!");
            loop = false;
            break;

        default:
            console.log("Lựa chọn không hợp lệ, chọn lại!");
            break;
    }
}