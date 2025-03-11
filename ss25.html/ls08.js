let password = prompt("Mời bạn nhập mật khẩu");

function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }

    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;
    
    for (let i = 0; i < password.length; i = i + 1) {
        let char = password[i];
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        }
        else if (char >= 'a' && char <= 'z') {
            hasLowerCase = true;
        }
        else if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
        if (hasUpperCase && hasLowerCase && hasNumber) {
            return true;
        }
    }
    return hasUpperCase && hasLowerCase && hasNumber;
}
console.log(isStrongPassword(password));