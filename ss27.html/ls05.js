let inputArr = prompt("Nhập mảng các số cách nhau bởi dấu phẩy");
let inputN = prompt("Nhập kích thước mảng con:");

function Array1(arr, n) {
    if (!Array.isArray(arr) || typeof n !== "number" || n <= 0) {
        return "dữ liệu không hợp lệ";
    }
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    return result
};

let arr = inputArr.split(",").map(Number);
let n = Number(inputN);

if (arr.some(isNaN) || isNaN(n)) {
    console.log("dữ liệu không hợp lệ");
} else {
    console.log(Array1(arr, n));
}