function changeBackground(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
}

window.onload = function () {
    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
};
