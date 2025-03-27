document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".dark-mode-toggle");
    const modeIcon = document.getElementById("mode-icon");
    const body = document.body;

    // Kiểm tra chế độ Dark Mode từ localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        modeIcon.src = "https://img.icons8.com/ios-filled/50/moon.png"; // Chuyển sang icon mặt trăng
    }

    // Xử lý khi nhấn vào nút chuyển đổi
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            modeIcon.src = "https://img.icons8.com/ios-filled/50/moon.png"; // Chuyển sang icon mặt trăng
        } else {
            localStorage.setItem("darkMode", "disabled");
            modeIcon.src = "https://img.icons8.com/ios-filled/50/sun.png"; // Quay lại icon mặt trời
        }
    });
});
