let array = [];
let menu = `
================== MENU ===================
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của một phần tử trong mảng
6. Sắp xếp mảng tăng dần
7. Thoát chương trình
============================================

Lựa chọn của bạn : `;
let choice;
let loop = true;
while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1://nhập mảng
            let n = +prompt("Mời nhập số lượng phần tử cho mảng: ");
            for (let i = 0; i < n; i++) {
                let input = +prompt("Mời bạn nhập vào phần tử muốn thêm: ");
                array.push(input);
            }
            alert("Nhập phần tử thành công!!");
            break;
        case 2://hiển thị mảng
            alert("Phần tử trong mảng là: " + array);
            break;
        case 3://tìm phần tử lớn nhất và nhỏ nhất trong mảng
            let max = array[0];
            let min = array[0];
            for (let i = 1; i < array.length; i++) {
                if (array[i] < min) {
                    min = array[i];
                }
                if (array[i] > max) {
                    max = array[i];
                }
            }
            alert("số lớn nhất là: " + max);
            alert("số nhỏ nhất là: " + min);
            break;
        case 4://tính tổng các phần tử trong mảng
            let sum = 0;
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }
            alert("Tổng các phần tử trong mảng là: " + sum);
            break;
        case 5://tìm số lần xuất hiện cảu một phần tử trong mảng
            let x = +prompt("Nhập phần tử cần tìm: ");
            let count = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] === x) {
                    count++;
                }
            }
            alert("số lần xuất hiện của " +x+ " trong mảng là: " +count);
            break;
        case 6://sắp xếp mảng tăng dần
            let temp = 0;
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array.length -i -1; j++) {
                    if (array[j] > array[j + 1]) {
                        temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;
                    }
                }
            }
            alert("mảng sau khhi được sắp xếp tăng dần: " + array);
            break;
        case 7://thoát chương trình
            alert("Kết thúc chương trình!!!");
            loop = false;
            break
        default:
            alert("Lựa chọn không hợp lệ! vui lòng nhập lại!");
            break;
    }
}