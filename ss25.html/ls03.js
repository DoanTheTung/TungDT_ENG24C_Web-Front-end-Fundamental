let arr = [];
let num;

do {
    num = +prompt("Mời bạn nhập số phần tử muốn thêm");
    if (isNaN(num) || num <= 0) {
        console.log("dữ liệu không hợp lệ");
    }
} while (isNaN(num) || num <= 0);
for (let i = 0; i < num; i = i + 1) {
    let value = prompt("Mời bạn nhập phần tử");
    if (!isNaN(value)) {
        arr.push(+value);
    } else {
        console.log("Dữ liệu không hợp lệ");
        i--;
    }
}

function check(arr) {
    if (arr.length === 0) {
        console.log("Mảng không có phần tử");
        return;
    }
    let count = 0
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i] % 2 == 0 && arr[i] != 0) {
            console.log(arr[i]);
            count = count + 1;
        }
    }
    if (count === 0) {
        console.log("Mảng ko chứa số chẵn");
    }
}
console.log(check(arr));