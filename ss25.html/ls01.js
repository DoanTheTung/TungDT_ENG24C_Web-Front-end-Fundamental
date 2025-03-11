function createArray() {
    let arr = [];
    let n = +prompt("Mời nhập số lượng phần tử của mảng: ");

    if (!Number.isInteger(n) || n <= 0) {
        console.log("Số lượng phần tử nhập vào không hợp lệ! Vui lòng nhập lại!");
        return null;
    }

    for (let i = 0; i < n; i++) {
        let input = +prompt("Nhập phần tử của mảng: ");
        arr.push(input);
    }
    return arr;
}

function findMinElement(arr) {
    if (arr.length === 0) {
        console.log("Mảng rỗng, không thể tìm thấy phần tử");
        return null;
    }

    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function isValidInteger(num) {
    return Number.isInteger(num);
}

if (isValidInteger(num)) {
    let arr = createArray();
    if (arr !== null) {
        console.log("Mảng vừa nhập:", arr);
        let minValue = findMinElement(arr);
        console.log("Phần tử nhỏ nhất trong mảng là: " + minValue);
    }
} else {
    console.log("Dữ liệu không hợp lệ! Vui lòng nhập số nguyên.");
}