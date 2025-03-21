function changeColor() {
    let randomColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    document.body.style.backgroundColor = randomColor;
}