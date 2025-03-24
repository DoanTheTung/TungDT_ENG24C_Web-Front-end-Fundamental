// Dữ liệu sản phẩm mẫu
// B1: Xây dựng kho lưu trữ dữ liệu mô phỏng
const products = [
    {
        id: 1,
        name: "Điện thoại Samsung Galaxy A54",
        price: 7490000,
        image:
            "https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg",
    },
    {
        id: 2,
        name: "Laptop Dell Inspiron 15",
        price: 15990000,
        image:
            "https://bizweb.dktcdn.net/100/446/400/products/laptop-dell-vostro-3490-1-gia-loc.jpg?v=1699258008053",
    },
    {
        id: 3,
        name: "Tai nghe AirPods Pro",
        price: 4990000,
        image:
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836",
    },
    {
        id: 4,
        name: "Đồng hồ thông minh Apple Watch",
        price: 8990000,
        image:
            "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzR2eDMxaWg4TFhITTVrUW41Z084dENpYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNL3gwYlE3R0w4Z1RCbG9qQTd1MjYyL1owaE5aVCt2Ri82aDRacTg0bXlaZA",
    },
    {
        id: 5,
        name: "Máy ảnh Canon EOS M50",
        price: 12490000,
        image:
            "https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r50/black-18-45/canon-eos-r50-lens-18-45mm-500x500.jpg",
    },
    {
        id: 6,
        name: "Loa Bluetooth JBL Flip 5",
        price: 2190000,
        image:
            "https://bizweb.dktcdn.net/100/445/498/products/jbl-go-4-3-4-left-black-48178-x1.jpg?v=1732646465910",
    },
    {
        id: 7,
        name: "Bàn phím cơ Logitech G Pro",
        price: 2490000,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1MvD76Mt-Ne0IC2DPMMsTZpG05xDxJOzkqw&s",
    },
    {
        id: 6,
        name: "Chuột không dây Logitech MX Master",
        price: 1890000,
        image:
            "https://product.hstatic.net/200000722513/product/h_mx_master_3_wireless__graphite_.jpg_1e5491e35f754dcc90b90582a9c3be95_ca0c63ca59de4ed1b4d46fcc5c81c1ed.png",
    },
];

// Khởi tạo giỏ hàng
let cart = [];

const savedCart = localStorage.getItem('cart');
if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartDisplay();
}

// Định dạng tiền tệ
function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN') + '₫';
}

// Hiển thị sản phẩm
function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML =
            `<img class="product-image" src="${product.image}">
            <div class="product-title">${product.name}</div>
            <div class="product-price">${formatCurrency(product.price)}</div>
            <button class="add-to-cart-btn" data-id="${product.id}">Thêm vào giỏ hàng</button>`
            ;

        productGrid.appendChild(productCard);
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    const product = products.find(p => p.id === productId);

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        // Nếu đã có, tăng số lượng
        existingItem.quantity++;
    } else {
        // Nếu chưa có, thêm vào giỏ hàng với số lượng là 1
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    // Cập nhật hiển thị giỏ hàng
    updateCartDisplay();
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateQuantity(productId, change) {
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += change;

        // Nếu số lượng = 0, xóa sản phẩm khỏi giỏ hàng
        if (cartItem.quantity <= 0) {
            removeFromCart(productId);
        } else {
            // Cập nhật hiển thị giỏ hàng
            updateCartDisplay();
        }
    }
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Cập nhật hiển thị giỏ hàng
function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Tính tổng tiền
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Cập nhật hiển thị tổng tiền
    cartTotalElement.textContent = `Tổng: ${formatCurrency(total)}`;

    // Cập nhật danh sách sản phẩm trong giỏ hàng
    if (cart.length === 0) {
        cartItemsElement.innerHTML = '<div class="empty-cart">Giỏ hàng trống</div>';
    } else {
        cartItemsElement.innerHTML = '';

        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';

            cartItemElement.innerHTML =
                `<div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${formatCurrency(item.price)} x ${item.quantity}</div>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
                    <button class="remove" data-id="${item.id}">X</button>
                </div>`
                ;

            cartItemsElement.appendChild(cartItemElement);
        });

        // Thêm sự kiện click cho các nút trong giỏ hàng
        const decreaseButtons = document.querySelectorAll('.decrease-btn');
        const increaseButtons = document.querySelectorAll('.increase-btn');
        const removeButtons = document.querySelectorAll('.remove');

        decreaseButtons.forEach(button => {
            button.addEventListener('click', function () {
                const productId = parseInt(this.getAttribute('data-id'));
                updateQuantity(productId, -1);
            });
        });

        increaseButtons.forEach(button => {
            button.addEventListener('click', function () {
                const productId = parseInt(this.getAttribute('data-id'));
                updateQuantity(productId, 1);
            });
        });

        removeButtons.forEach(button => {
            button.addEventListener('click', function () {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
    }

}

// Xử lý sự kiện thanh toán
document.getElementById('checkout-btn').addEventListener('click', function () {
    if (cart.length === 0) {
        alert('Giỏ hàng của bạn đang trống!');
    } else {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        alert(`Cảm ơn bạn đã mua hàng!\nTổng giá trị đơn hàng: ${formatCurrency(total)}`);

        // Xóa giỏ hàng sau khi thanh toán
        cart = [];
        updateCartDisplay();
    }
});

// Khởi tạo hiển thị ban đầu
displayProducts();