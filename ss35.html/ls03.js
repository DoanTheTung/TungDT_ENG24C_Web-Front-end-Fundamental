let products = [
    {
        id: 1,
        name: "Laptop Dell XPS 15",
        price: "35990000",
        image: "https://laptop3mien.vn/wp-content/uploads/2019/12/dell-xps-9560.jpg",
        description: "Laptop cao cấp với màn hình 15 INCH, CPU Intel Core i7 và RAM 16GB."
    },
    {
        id: 2,
        name: "iPhone 15 Pro Max",
        price: "32990000",
        image: "https://cdn.hoanghamobile.com/Uploads/2023/12/14/iphone-15-pro-max-natural-titanium-4-hhm.jpg",
        description: "Điện thoại flagship của Apple với camera 48MP và chip A17 Pro."
    },
    {
        id: 3,
        name: "Samsung Galaxy S24 Ultra",
        price: "28990000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUM-29t_hCYs5jJTbnRxiYG7eKERs60tFy9Q&s",
        description: "Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom."
    },
    {
        id: 4,
        name: "Tai nghe Sony WH-1000XM5",
        price: "7999000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMx9FgjID1GY_hEDSOPqC5HC1oJngMzsyvw&s",
        description: "Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ."
    },
    {
        id: 5,
        name: "Apple Watch Series 9",
        price: "11990000",
        image: "https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all",
        description: "Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao."
    },
    {
        id: 6,
        name: "Loa JBL Charge 5",
        price: "3999000",
        image: "https://cdn.tgdd.vn/Products/Images/2162/251230/bluetooth-jbl-charge-5-2-750x500.jpg",
        description: "Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ."
    }
];

function displayProducts(productArray) {
    let productList = document.getElementById("productList");
    let noResults = document.getElementById("noResults");
    productList.innerHTML = "";
    if (productArray.length === 0) {
        noResults.classList.remove("d-none");
    } else {
        noResults.classList.add("d-none");
        productArray.forEach(product => {
            const productCard = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <h5>${product.name}</h5>
                    <p class="description">${product.description}</p>
                    <p class="price">${parseInt(product.price).toLocaleString()} VNĐ</p>
                    <button class="btn btn-buy">Buy</button>
                </div>
            `;
            productList.innerHTML += productCard;
        });
    }
}
function searchProducts() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchInput)
    )
    displayProducts(filteredProducts);
}
displayProducts(products);
document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        searchProducts();
    }
});