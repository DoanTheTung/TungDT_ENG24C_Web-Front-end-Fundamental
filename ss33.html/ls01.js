function togglePassword() {
    let input = document.getElementById("password");
    let eyeIcon = document.getElementById("eye-icon");
    if (input.type === "password") {
        input.type = "text";
        eyeIcon.textContent = "visibility";
    } else {
        input.type = "password";
        eyeIcon.textContent = "visibility";
    }
}