let count = 0;
let btn = document.getElementById("btn");
let result = document.getElementById("result");
btn.addEventListener("click", function () {
    count++;
    result.innerText = "Số lần bấm: " + count;
});