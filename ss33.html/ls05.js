const products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        image: 'https://www.laptopvip.vn/images/companies/1/JVS/DELL/XPS/XPS-7590/dell-xps-15-9750-10002.jpg?1681264287490',
        description: 'Laptop cao cấp.'
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 32990000,
        image: 'https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/tile/Apple-iPhone-15-Pro-lineup-hero-230912.jpg.news_app_ed.jpg',
        description: 'Điện thoại flagship.'
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image: 'https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain',
        description: 'Camera siêu zoom.'
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 7990000,
        image: 'https://sony.scene7.com/is/image/sonyglobalsolutions/360-RA-category-icon-20221202?$S7Product$&fmt=png-alpha',
        description: 'Chống ồn cực tốt.'
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
        description: 'Hỗ trợ thể thao.'
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3990000,
        image: 'https://hoanghamobile.com/Uploads/2021/03/09/image-removebg-preview-6.png',
        description: 'Âm bass mạnh.'
    }
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const noResults = document.getElementById("noResults");

function displayProducts(productArray) {
    productList.innerHTML = "";
    if (productArray.length === 0) {
        noResults.style.display = "block";
        return;
    }
    noResults.style.display = "none";
    productArray.forEach(product => {
        let productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><b>${product.price.toLocaleString()} VND</b></p>
        `;
        productList.appendChild(productCard);
    });
}

displayProducts(products);

searchBtn.onclick = function () {
    let searchText = searchInput.value.toLowerCase()
    let filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchText)
    );
    displayProducts(filteredProducts);
};
