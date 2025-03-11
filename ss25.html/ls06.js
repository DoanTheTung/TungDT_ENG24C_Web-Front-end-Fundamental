let str = prompt("Mời bạn nhập vào 1 chuỗi bất kỳ: ");

function isPalindrome(str) {
    if (!str) {
        return "chuỗi rỗng ko thể kiểm tra";
    }
    let length = str.length;
    for (let i = 0; i < length / 2; i = i + 1) {
        if (str[i] !== str[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

let result = isPalindrome(str);

if (result === true) {
    console.log("Là chuỗi đối xứng");
} else if (result === false) {
    console.log("Không phải là chuỗi đối xứng");
} else {
    console.log(result);
}