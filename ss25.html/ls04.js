let num = +prompt("Mời bạn nhập vào 1 số nguyên dương");
let count = 0;

function check(num) {
    if (num <= 1) {
        return "dữ liệu không hợp lệ";
    }
    if (isNaN(num) || !Number.isInteger(num)) {
        console.log("dữ liệu không hợp lệ");
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i = i + 1) {
        if (num % i === 0) {
            count = count + 1;
        }
    }
    if (count > 0) {
        return false;
    } else {
        return true;
    }
}

let result = check(num);

if (result === true) {
    console.log("Là số nguyên tố");
} else if (result === false) {
    console.log("Không phải là số nguyên tố");
} else {
    console.log(result);
}