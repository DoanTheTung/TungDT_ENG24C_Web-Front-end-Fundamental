let array = [];
let menu = `
================== MENU ===================
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xoá phần tử thứ hai trong mảng
6. Tìm phần tử lớn thứ hai trong mảng
7. Thoát chương trình
============================================

Lựa chọn của bạn : `;
let choice;
let loop = true;
while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1://Nhập mảng số nguyên
            let n = +prompt("Mời nhập số lượng phần tử cho mảng: ");
            for (let i = 0; i < n; i++) {
                let input = +prompt("Mời bạn nhập vào phần tử muốn thêm: ");
                if (Number.isInteger(input) === true) {
                    array.push(input);
                } else {
                    alert("phần tử không phải số nguyên! vui lòng nhập lại!");
                }
            }
            break;
        case 2://hiển thị mảng
            alert("array = " + array);
            break;
        case 3://tìm các phần tử chẵn và lẻ
            for (let i = 0; i < array.length; i++) {
                if (array[i] % 2 === 0) {
                    alert("số chẵn trong mảng là : " + array[i]);
                } else {
                    alert("số lẻ trong mảng là : " + array[i]);
                }
            }
            break;
        case 4://tính trung bình cộng của mảng
            let result = 0;
            for (let i = 0; i < array.length; i++) {
                result += array[i];
            }
            let avg = result / array.length;
            alert("trung bình cộng của mảng là : " + avg);
            break;
        case 5://xoá phần tử tại vị trí chỉ định
            let pos = +prompt("Mời bạn nhập vào vị trí phần tử muốn xóa");
            if (pos >= 0 && !isNaN(pos)) {
                arr.splice(pos, 1);
                for (let i = 0; i < array.length; i++) {
                    alert("Mảng sau khi xóa phần tử là " + array);
                }
            } else {
                alert("hãy nhập vị trí >= 0 và là số ");
            }
            break;
        case 6://tìm phần tử lớn thứ hai trong mảng
            let max = array[0];
            let secondMax = null;
            for (let i = 1; i < array.length; i++) {
                if (array[i] > max) {
                    secondMax = max;
                    max = array[i];
                } else if (array[i] < max && (secondMax === null || array[i] > secondMax)) {
                    secondMax = array[i];
                }
            }
            if (array.length < 2) {
                alert("Mảng không đủ phần tử để tìm số lớn thứ hai");
            } else {
                alert("Phần tử lớn thứ 2 trong mảng là : " + secondMax);
            }
            break;
        case 7://thoát chương trình
            alert("kết thúc chương trình !!!");
            loop = false;
            break;
        default:
            alert("Lựa chọn không hợp lệ! vui lòng chọn lại!");
            break;
    }
}