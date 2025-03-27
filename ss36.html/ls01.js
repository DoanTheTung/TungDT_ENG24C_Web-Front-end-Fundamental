document.addEventListener("DOMContentLoaded", function () {
    let savedName = localStorage.getItem("username");

    if (savedName) {
        showGreeting(savedName);
    }
});

function saveName() {
    let name = document.getElementById("nameInput").value.trim();

    if (name) {
        localStorage.setItem("username", name);
        showGreeting(name);
    } else {
        alert("Vui lòng nhập tên!");
    }
}

function showGreeting(name) {
    document.getElementById("h2").style.display = "none";
    document.getElementById("nameForm").style.display = "none";
    document.getElementById("greeting").style.display = "block";
    document.getElementById("displayName").textContent = name;
}

function changeName() {
    document.getElementById("h2").style.display = "block";
    localStorage.removeItem("username");
    document.getElementById("nameForm").style.display = "block";
    document.getElementById("greeting").style.display = "none";
    document.getElementById("nameInput").value = "";
}

