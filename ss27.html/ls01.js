let menu = `
===== MENU =====
1.Cộng hai số.
2.Trừ hai số.
3.Nhân hai số.
4.Chia hai số.
5.Thoát.
Lựa chọn của bạn là: `;

let choice;
let loop = true;
let number1 = +prompt("nhập số thứ nhất: ");
let number2 = +prompt("nhập số thứ hai: ");

function sum() {
    result = number1 + number2;
    return result;
}
function effect() {
    result = number1 - number2;
    return result;
}
function integrate() {
    result = number1 * number2;
    return result;
}
function divide() {
    result = number1 / number2;
    return result;
}

while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1://cộng 2 số
            sum();
            alert("tổng 2 số là: " + result);
            break;
        case 2://trừ 2 số
            effect();
            alert("hiệu 2 số là: " + result);
            break;
        case 3://nhân 2 số
            integrate();
            alert("tích 2 số là: " + result);
            break;
        case 4://chia 2 số
            divide();
            alert("thương 2 số là: " + result);
            break;
        case 5://thoát chương trình
            alert("kết thúc chương trình!!!");
            loop = false;
            break;
        default:
            alert("lựa chọn không hợp lệ! vui lòng chọn lại!");
            break;
    }
}