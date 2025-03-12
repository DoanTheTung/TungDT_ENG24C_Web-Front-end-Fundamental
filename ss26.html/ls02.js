let array = [];
let n = +prompt("Nhập số phần tử cho mảng: ");

function filterLongStrings(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string" && arr[i].length > 5) {
            result.push(arr[i]);
        }
    }
    if (result.length > 0) {
        return result;
    } else {
        return "Mảng không có phần tử nào thỏa mãn điều kiện.";
    }
}

if (n <= 0 || isNaN(n)) {
    console.log("Mảng rỗng hoặc dữ liệu không hợp lệ! Vui lòng nhập lại.");
} else {
    for (let i = 0; i < n; i++) {
        let input = prompt("Mời bạn nhập 1 chuỗi ký tự bất kỳ: ");
        array.push(input);
        console.log("Mảng chuỗi hiện tại:", array);
    }

    let result = filterLongStrings(array);
    console.log("Các chuỗi có độ dài lớn hơn 5 ký tự:", result);
}

