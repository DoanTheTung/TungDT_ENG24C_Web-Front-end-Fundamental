const textElement = document.getElementById('text');
let fontSize = 16;
function increaseFontSize() {
    fontSize += 2;
    textElement.style.fontSize = fontSize + 'px';
}
function decreaseFontSize() {
    fontSize -= 2;
    if (fontSize < 8) {
        fontSize = 8;
    }
    textElement.style.fontSize = fontSize + 'px';
}