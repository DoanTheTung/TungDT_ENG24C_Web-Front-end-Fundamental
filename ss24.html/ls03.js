let arr = [];
let choice;
let loop = true;
let menu = `
 ================== MENU ===================
 1. Nhập mảng số nguyên
 2. Hiển thị mảng
 3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
 4. Tính tổng và trung bình cộng của các số dương trong mảng
 5. Đảo ngược mảng
 6. Kiểm tra mảng có đối xứng không
 7. Thoát chương trình
 ===========================================
 
 Lựa chọn của bạn là: `;
while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let count = +prompt("Mời nhập số phần tử:");
            if (isNaN(count) || count < 0 || !Number.isInteger(count)) {
                console.log("Số phần tử phải là số nguyên không âm");
            } else {

                let i = 0;
                while (i < count) {
                    let value = +prompt(`Mời nhập phần tử thứ ${i + 1}:`);
                    if (isNaN(value)) {
                        console.log("Hãy nhập một số");
                        continue;
                    }
                    if (!Number.isInteger(value)) {
                        console.log("Hãy nhập số nguyên");
                        continue;
                    }
                    arr.push(value);
                    i++;
                }
                console.log("Đã nhập mảng thành công:", arr);
            }
            break;
        case 2:
            if (arr.length === 0) {
                console.log("Không có phần tử trong mảng");
            } else {
                for (let i = 0; i < arr.length; i++) {
                    console.log(`${i}. ${arr[i]}`);
                }
            }
            break;
        case 3:
            let max = 0
            let index = 0
            for (let i = 0; i < arr.length; i = i + 1) {
                if (arr[i] > max) {
                    max = arr[i]
                    index = i

                }
            }
            console.log("Phần tử lớn nhất trong mảng là : " + max)
            console.log("Chỉ số của phần tử " + max + " là " + index)
            break
        case 4:
            let total = 0;
            let counts = 0;
            for (let i = 0; i < arr.length; i = i + 1) {
                if (arr[i] > 0) {
                    total += arr[i]
                    counts = counts + 1
                }
            }
            let avg = total / counts
            console.log("Tổng các số dương trong mảng là " + total)
            console.log("Trung bình cộng các số dương trong mảng là " + avg)
            break;
        case 5:
            let newArr = arr.reverse()
            console.log("Mảng sau khi đảo ngược là " + newArr)
            break;
        case 6:
            let opposite = true
            for (let i = 0; i < arr.length / 2; i = i + 1) {
                if (arr[i] != arr[arr.length - i - 1]) {
                    opposite = false
                    break;
                }
            }
            if (opposite) {
                console.log("Mảng đối xứng")
            } else {
                console.log("Mảng ko đối xứng")
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