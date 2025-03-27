// B1: Xây dựng kho lưu trữ dữ liệu mô phỏng

let employeeList = JSON.parse(localStorage.getItem("employeeList"));
let tbody = document.getElementById("tbody");
let form = document.getElementById("add-form");
let paginationContainer = document.getElementById("pagination");

let totalPage = 4;
let pageSize = 5; // 5 phần tử / trang

// B2: Lưu trữ danh sách dữ liệu mẫu trên vào localstorage
// localStorage.setItem("employeeList", JSON.stringify(employeeList));

// B3: Duyệt qua mảng employeeLis, Lấy ra toàn bộ phần tử có
// trong mảng ---> HTML

render(employeeList);

// B4: Tính năng Create - Thêm mới
form.onsubmit = function (event) {
    event.preventDefault();
    // Tiến hành thêm mới nhân viên
    let name = form.employeeName.value;
    let position = form.position.value;

    // B4.2: Tạo ra 1 đối tượng nhân viên
    let employee = {
        id: Math.random(),
        name: name,
        position: position,
    };

    console.log(employee);
    // B4.3: Thêm đối tượng nhân viên đó vào trong Local Storage
    employeeList.push(employee);
    localStorage.setItem("employeeList", JSON.stringify(employeeList));
    // B4.4: Phản ánh sự thay đổi dữ liệu đó
    // bằng cách gọi lại hàm render
    render(employeeList);
};

function render(list) {
    tbody.innerHTML = "";
    for (let i in list) {
        list[i]; // {}, {}, {}
        let tr = `
          <tr>
              <th scope="row">${+i + 1}</th>
              <td>${list[i].name}</td>
              <td>${list[i].position}</td>
          </tr>
          `;
        tbody.innerHTML += tr;
    }
}

// Tính năng phân trang (Pagination)

// Đặt ra câu hỏi
// Bao nhiêu trang ???
// 1 trang có bao nhiêu đối tượng dữ liệu ???
// Số trang = 4 trang
// Trang 1 --> 5 đối tượng
// Trang 2 --> 5 đối tượng
// Trang 3 --> 5 đối tượng
// Trang 4 --> 3 đối tượng

// B5: Tạo ra giao diện của các trang trong component
// phân trang
for (let i = 1; i <= totalPage; i++) {
    let li = `
    <li class="page-item"><a class="active-page page-link" href="#">${i}</a></li>
    `;
    paginationContainer.innerHTML += li;
}
paginationContainer.innerHTML += `
          <li class="page-item"><a class="page-link" href="#">Next</a></li>`;

let activePages = document.getElementsByClassName("active-page");
for (let page of activePages) {
    page.onclick = function (event) {
        event.preventDefault();
        let pageIndex = +page.innerText;
        console.log(pageIndex);
        // Tính năng phân trang !!!!

        // LOGIC ---> Lấy đúng ra số lượng phần tử
        // có trong trang đang bấm vào
        // BỎ QUA toàn bộ phần tử của các trang trước
        console.log(employeeList);
        // B1: Tạo ra 1 mảng dùng để hiển thị thành các phần
        // tử HTML (tr) ở trên trình duyệt
        // Mảng này phải bao gồm các phần tử dữ liệu tương ứng
        // với trang đang bấm vào

        let paginateList = [];
        let start = (pageIndex - 1) * pageSize;
        let end = start + pageSize - 1;
        if (end >= employeeList.length - 1) {
            end = employeeList.length - 1;
        }

        for (let i = start; i <= end; i++) {
            paginateList.push(employeeList[i]);
        }
        console.log(paginateList);
        render(paginateList);
        // Trang 1: 0 - 4
        // Trang 2: 5 - 9

        // Hiển thị các phần tử lấy ra được khi bấm vào trang
        // thông qua hàm render
    };
}

// Khi làm tính năng phân trang
// Số lượng phần tử trong 1 trang (5) - pageSize
// Trang đang bấm vào là trang nào - pageIndex