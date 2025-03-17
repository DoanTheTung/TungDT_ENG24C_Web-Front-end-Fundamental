const menu = [];
let menuPrompt = `
 --------MENU QUẢN LÝ NHÀ HÀNG--------
 1. Thêm món ăn vào danh mục.
 2. Xóa món ăn theo tên khỏi danh mục.
 3. Cập nhật thông tin món ăn theo tên (tên, giá, mô tả).
 4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
 5. Tìm kiếm món ăn theo tên trong toàn bộ menu.
 6. Thoát
 
 Mời bạn nhập lựa chọn : 
 `;

let input;
while (input !== 6) {
    input = +prompt(menuPrompt);
    switch (input) {
        case 1:
            let category = prompt("Mời bạn nhập tên danh mục:");
            let dishName = prompt("Mời bạn nhập tên món ăn:");
            let price = +prompt("Mời bạn nhập giá món ăn:");
            let description = prompt("Mời bạn nhập mô tả món ăn:");
            let categoryIndex = menu.findIndex(cat => cat.categoryName === category);
            if (categoryIndex === -1) {
                menu.push({
                    categoryName: category,
                    dishes: [{
                        name: dishName,
                        price: price,
                        description: description
                    }]
                });
            } else {
                menu[categoryIndex].dishes.push({
                    name: dishName,
                    price: price,
                    description: description
                })
            }
            console.log("Đã thêm món ăn thành công!");
            break;
        case 2:
            let deleteCategory = prompt("Mời bạn nhập tên danh mục chứa món ăn cần xóa:");
            let deleteDishName = prompt("Mời bạn nhập tên món ăn cần xóa:");
            let deleteCatIndex = menu.findIndex(cat => cat.categoryName === deleteCategory);
            if (deleteCatIndex === -1) {
                console.log("Không tìm thấy danh mục: " + deleteCategory);
            } else {
                let dishIndex = menu[deleteCatIndex].dishes.findIndex(dish => dish.name === deleteDishName);
                if (dishIndex === -1) {
                    console.log("Không tìm thấy món ăn: " + deleteDishName + " trong danh mục " + deleteCategory);
                } else {
                    menu[deleteCatIndex].dishes.splice(dishIndex, 1);
                    if (menu[deleteCatIndex].dishes.length === 0) {
                        menu.splice(deleteCatIndex, 1);
                    }
                    console.log("Đã xóa món ăn ");
                }
            }
            break;
        case 3:
            let updateCategory = prompt("Mời bạn nhập tên danh mục chứa món ăn cần cập nhật:");
            let updateDishName = prompt("Mời bạn nhập tên món ăn cần cập nhật:");
            let updateCatIndex = menu.findIndex(cat => cat.categoryName === updateCategory);

            if (updateCatIndex === -1) {
                console.log("Không tìm thấy danh mục: " + updateCategory);
            } else {
                let dishIndex = menu[updateCatIndex].dishes.findIndex(dish => dish.name === updateDishName);
                if (dishIndex === -1) {
                    console.log("Không tìm thấy món ăn: " + updateDishName + " trong danh mục " + updateCategory);
                } else {
                    let newName = prompt("Nhập tên mới :");
                    let newPrice = prompt("Nhập giá mới :");
                    let newDescription = prompt("Nhập mô tả mới:");
                    menu[updateCatIndex].dishes[dishIndex] = {
                        name: newName,
                        price: Number(newPrice),
                        description: newDescription
                    }
                    console.log("Đã cập nhật thông tin món ăn");
                }
            }
            break;
        case 4:
            displayMenu();
            break
        case 5:
            let searchDishName = prompt("Mời bạn nhập tên món ăn cần tìm:");
            let found = false;
            menu.forEach((category, catIndex) => {
                let dishIndex = category.dishes.findIndex(dish => dish.name.toLowerCase() === searchDishName.toLowerCase());
                if (dishIndex !== -1) {
                    found = true;
                    console.log("Tìm thấy món ăn : " + category.categoryName);
                    displayDish(category.dishes[dishIndex], dishIndex);
                }
            })
            if (!found) {
                console.log("Không tìm thấy món ăn: " + searchDishName + " trong menu");
            }
            break;
        case 6:
            console.log("Cảm ơn bạn đã sử dụng!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
            break;
    }
}
function displayMenu() {
    if (menu.length === 0) {
        console.log("Menu ko có món ăn");
        return;
    }
    menu.forEach((category, catIndex) => {
        console.log(`Danh mục ${catIndex + 1}: ${category.categoryName}`);
        category.dishes.forEach((dish, dishIndex) => {
            console.log(`Món ${dishIndex + 1}:`);
            console.log("Tên món ăn:", dish.name);
            console.log("Giá:", dish.price);
            console.log("Mô tả:", dish.description);
            console.log("---------------------");
        })
    })
}
function displayDish(dish, index) {
    console.log(`Món ${index + 1}:`);
    console.log("Tên món ăn:", dish.name);
    console.log("Giá:", dish.price);
    console.log("Mô tả:", dish.description);
    console.log("---------------------");
}