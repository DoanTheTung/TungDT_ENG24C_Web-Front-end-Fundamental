function checkEmail() {
    let emailInput = document.getElementById('emailInput');
    let email = emailInput.value.split(" ").filter(Boolean).join(" ");
    let result = document.getElementById('result');
    let isValid = true;

    if (!email.includes('@')) {
        isValid = false;
    }

    let lastFourChars = '';
    if (email.length >= 4) {
        lastFourChars = email.slice(email.length - 4, email.length);
    }

    let lastThreeChars = '';
    if (email.length >= 3) {
        lastThreeChars = email.slice(email.length - 3, email.length);
    }

    if (lastFourChars !== '.com' && lastThreeChars !== '.vn') {
        isValid = false;
    }

    if (isValid) {
        result.textContent = 'Email hợp lệ!';
        result.className = 'valid';
    } else {
        result.textContent = 'Email không hợp lệ!';
        result.className = 'invalid';
    }
}
