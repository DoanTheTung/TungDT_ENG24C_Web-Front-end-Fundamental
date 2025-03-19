function login() {
    const correctUsername = "huanrose@gmail.com";
    const correctPassword = "123456";
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;

    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        console.log("Đăng nhập thành công!");
    } else {
        console.log("Đăng nhập thất bại. Vui lòng thử lại!");
    }
}