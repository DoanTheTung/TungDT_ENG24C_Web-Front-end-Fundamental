let str = prompt("Mời bạn nhập vào 1 chuỗi ký tự bất kỳ: ");

function change(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        }
    }
    return words.join(" ");
}
console.log(change(str));