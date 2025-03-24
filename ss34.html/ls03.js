document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let messageDiv = document.getElementById('message');
    if (!email) {
        messageDiv.textContent = 'Email không được để trống.';
        return;
    }
    if (!password) {
        messageDiv.textContent = 'Mật khẩu không được để trống.';
        return;
    }
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(u => u.email === email && u.password === password);
    if (user) {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Đăng nhập thành công đang chuyển trang';
            window.location.href = 'https://web.facebook.com/'; 
    } else {
        messageDiv.textContent = 'Email hoặc mật khẩu không đúng.';
    }
});