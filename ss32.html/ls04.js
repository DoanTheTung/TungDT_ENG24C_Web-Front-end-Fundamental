function checkEmail() {
    let emailInput = document.getElementById('emailInput');
    let email = emailInput.value.trim();
    let result = document.getElementById('result');
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;
    if (emailRegex.test(email)) {
        result.textContent = "Email hợp lệ!";
        result.className = "valid";
    } else {
        result.textContent = "Email không hợp lệ!";
        result.className = "invalid";
    }
}
document.getElementById("emailInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkEmail();
    }
});
