let arr = [4, 5.4, 6, -2];

function numberIntenger() {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > 0) {
            count++;
        }
    }
    if (count > 1) {
        console.log(count);
    } else {
        console.log("không có số nguyên dương trong mảng");
    }
}
numberIntenger();