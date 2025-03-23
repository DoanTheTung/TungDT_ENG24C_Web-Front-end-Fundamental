let dish = [
    { name: "Rau sạch", category: "Đồ ăn" },
    { name: "Thịt lợn", category: "Đồ ăn" },
    { name: "Pepsi không calo", category: "Nước" },
    { name: "Cocacola", category: "Nước" },
    { name: "Cờ Lê", category: "Dung cụ" },
    { name: "Tuy vít", category: "Dung cụ" }
];

function filterDishes() {
    let category = document.getElementById("category-select").value;
    let dishList = document.getElementById("dish-list");
    dishList.innerHTML = "";
    let filteredDishes = dish.filter(item => item.category === category);
    if (filteredDishes.length > 0) {
        filteredDishes.forEach(item => {
            let li = document.createElement("li");
            li.textContent = "Tên đồ ăn: " + item.name + " - Danh mục: " + item.category;
            dishList.appendChild(li);
        });
    } else {
        let li = document.createElement("li");
        li.textContent = "hãy chọn danh mục";
        dishList.appendChild(li);
    }
}