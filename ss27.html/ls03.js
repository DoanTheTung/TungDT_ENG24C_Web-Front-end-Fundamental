let array = [];
let loop = true;
let menu = `
=====MENU CÔNG THỨC HÌNH HỌC=====
1.Tính diện tích hình tròn.
2.Tính chu vi hình tròn.
3.Tính diện tích hình chữ nhật.
4.Tính chu vi hình chữ nhật.
5.Thoát.
Lựa chọn của bạn: `
let choice;

function circularArea() {
    let area = r*3.14;
    return area;
}
function circleCircumference() {
    let circumference
}
function rectangularRelics() {
    
}
function rectangularCircumference() {
    
}
while (loop) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let r = +prompt("nhập bnas kính hình tròn");
            circularArea();
            alert("diẹn tích hình tròn là: " +area);
            break;
        case 2:

            circleCircumference()
            break;
        case 3:

            rectangularRelics()
            break;
        case 4:

            rectangularCircumference()
            break;
        case 5:
            alert("kết thúc chương trình!!!");
            loop=false;
            break;
        default:
            alert("lựa chọn không hợp lệ! vui lòng chọn lại");
            break;
    }
}