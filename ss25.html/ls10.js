let products = [
    ["mì tôm", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000],
];

let cart = [];

// B1: Tạo ra menu
let menu = `
  -------- Menu --------
  1. Danh sách sản phẩm
  2. Mua hàng
  3. Tính tiền + Hoá đơn
  4. Thoát
  Mời bạn nhập vào sự lựa chọn của bạn:
  `;
let input;

while (input !== 4) {
    // B2: Cho người dùng nhập vào các sự lựa chọn
    input = +prompt(menu);

    switch (input) {
        case 1: // Hiển thị danh sách sản phẩm
            displayProduct(products);
            break;
        case 2: // Mua hàng
            // B3: Cho người dùng nhập vào tên sản phẩm muốn mua
            let productName = prompt("Mời bạn nhập tên sản phẩm muốn mua");
            // B4: Tìm kiếm xem sản phẩm có tồn tại trong cửa hàng hay không
            let findIndex = -1;
            for (let index in products) {
                if (productName === products[index][0]) {
                    findIndex = index;
                }
            }
            if (findIndex === -1) {
                console.log("Không tìm thấy sản phẩm");
            } else {
                // B5: Nếu không --> Hiển thị sản phẩm 0 tồn tại
                // B6: Nếu có --> Tiến hành mua hàng
                // B7: Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng (cart)
                let inCartIndex = -1;
                for (let i in cart) {
                    if (cart[i][0] === productName) {
                        inCartIndex = i;
                    }
                }
                if (inCartIndex === -1) {
                    // B8: Nếu chưa --> Thêm sản phẩm đó vào giỏ hàng
                    let product = products[findIndex];
                    let addProduct = [...product];
                    addProduct[1] = 1;
                    console.log(addProduct);
                    cart.push(addProduct);
                } else {
                    // B9: Nếu rồi --> Tìm vị trí của sản phẩm đó trong giỏ hàng và tăng
                    // só lượng lên 1 đơn vị
                    cart[inCartIndex][1]++;
                    console.log(cart);
                }
                // B10: Giảm số lượng của sản phẩm đó trong cửa hàng đi 1 đơn vị
                // console.log(products);
                products[findIndex][1]--;
            }
            break;
        case 3: // Hoá đơn
            displayProduct(cart);
            let sum = 0;
            for (let product of cart) {
                sum = sum + product[1] * product[2];
            }
            console.log("Tổng hoá đơn =", sum);
            break;
        case 4: // Thoát
            console.log("Thanks for using the app");
            break;
        default: // Lựa chọn không hợp lệ
            console.log("Lựa chọn không hợp lệ");
            break;
    }
}

function displayProduct(productList) {
    for (let index in productList) {
        console.log(
            `${+index + 1}. ${productList[index][0]} - ${productList[index][2]} - ${productList[index][1]
            }`
        );
    }
}