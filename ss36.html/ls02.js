const foods = [
    {
        id: 1,
        name: "Bún bò Huế",
        image: "https://i.ytimg.com/vi/A_o2qfaTgKs/maxresdefault.jpg", likes: 0
    },
    {
        id: 2,
        name: "Phở bò Hà Nội",
        image: "https://static.vinwonders.com/production/pho-bo-ha-noi.jpeg", likes: 0
    },
    {
        id: 3,
        name: "Cơm tấm Sài Gòn",
        image: "https://static.vinwonders.com/production/com-tam-sai-gon-thumb.jpg", likes: 0
    }
];

if (localStorage.getItem("foodLikes")) {
    let storedLikes = JSON.parse(localStorage.getItem("foodLikes"));
    foods.forEach(food => {
        if (storedLikes[food.id] !== undefined) {
            food.likes = storedLikes[food.id];
        }
    });
}

const foodList = document.getElementById("foodList");

function renderFoods() {
    foodList.innerHTML = "";
    foods.forEach(food => {
        const foodItem = document.createElement("div");
        foodItem.classList.add("food-card");
        foodItem.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <div class="food-info">
                <div class="food-name">${food.name}</div>
                <div class="likes">❤️ <span id="likes-${food.id}">${food.likes}</span> lượt thích</div>
                <button class="like-button" onclick="likeFood(${food.id})">Thích +1</button>
            </div>
        `;
        foodList.appendChild(foodItem);
    });
}

function likeFood(id) {
    const food = foods.find(f => f.id === id);
    if (food) {
        food.likes += 1;
        document.getElementById(`likes-${food.id}`).textContent = food.likes;

        const updatedLikes = {};
        foods.forEach(f => {
            updatedLikes[f.id] = f.likes;
        });
        localStorage.setItem("foodLikes", JSON.stringify(updatedLikes));
    }
}

renderFoods();