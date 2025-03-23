function checkLength() {
    let input = document.getElementById("text-input");
    let result = document.getElementById("result");
    let length = input.value.length;
    result.textContent = length + " ký tự";
}