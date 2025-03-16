let arr = [];
let num = +prompt("Mời bạn nhập số phần tử của mảng");

if (num > 0 && !Number.isNaN(num)) {
    for (let i = 0; i < num; i = i + 1) {
        let element = +prompt("Mời bạn nhập phần tử");
        if (!isNaN(element) && !Number.isNaN(element)) {
            arr.push(element);
        } else {
            console.log("dữ liệu bạn nhập ko hợp lệ");
            i = i - 1;
        }
    }
    console.log(timSoBiThieu(arr));
} else {
    console.log("dữ liệu bạn nhập ko hợp lệ");
}

function timSoBiThieu(arr) {
    for (let i = 1; i < arr.length; i = i + 1) {
        if (arr[i] !== arr[i - 1] + 1) {
            return arr[i - 1] + 1;
        }
    }
    return "Không có số bị thiếu";
}
