function createArray() {
    let arr = [];
    let i = 0;

    while (i < 2) {
        let input = parseFloat(prompt("Nhập phần tử của mảng (số nguyên dương): "));

        if (!Number.isInteger(input) || input < 0) {
            console.log("Phần tử không hợp lệ! Vui lòng nhập lại!");
        } else {
            arr.push(input);
            i++;
        }
    }
    return arr;
}

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let Array = createArray();
console.log("Tổng các phần tử trong mảng:", calculateSum(Array));