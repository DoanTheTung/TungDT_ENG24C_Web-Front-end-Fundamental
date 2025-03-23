// B1:
// Xây dựng kho lưu trữ dữ liệu mô phỏng

const photoList = [
    {
      id: 1,
      url: "https://i.pinimg.com/736x/43/49/f5/4349f58c290f0f6e138123475c15455c.jpg",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/474x/c6/a0/a4/c6a0a4a040fb5ed0b22ce461d92fd877.jpg",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/736x/67/4d/96/674d96b920e0a451047d6f16014ffb55.jpg",
    },
  ];
  
  let container = document.getElementById("container");
  let modal = document.getElementById("modal");
  let img = document.getElementsByTagName("img")[0];
  
  // B0: Ẩn lớp phủ đi
  modal.style.display = "none";
  
  // B2: Tính năng render (read)
  // --> Chuyển đổi toàn bộ các đối tượng dữ liệu
  // thành phần tử HTML --> Xuất hiện ở trên trình duyệt
  
  // B2.1: Duyệt qua toàn bộ mảng photoList
  for (let i in photoList) {
    // B2.2: Chuyển đổi các đối tượng dữ liệu thành HTML
    let div = `<div class="img" style="background-image: url(${photoList[i].url})"></div>`;
  
    // B2.3: Nối các chuỗi với định dạng HTML vừa tạo ra từ dữ liệu
    // vào làm nội dung bên trong là HTML của container
  
    container.innerHTML += div;
    //   container.innerHTML = container.innerHTML + div;
  }
  // B3: Xây dựng cấu trúc HTML dành cho lớp phủ
  // B4: Gọi tập hợp thẻ div(img) ra và gắn sự kiện onclick
  let divList = document.getElementsByClassName("img");
  
  for (let i = 0; i < divList.length; i++) {
    divList[i].onclick = function () {
      // B5: Hiển thị ra modal
      modal.style.display = "flex";
      // B6: Trích xuất được url của hình ảnh đang bấm vào
      let url = divList[i].style.backgroundImage;
  
      url = url.replace(`url("`, "");
      url = url.replace(`")`, "");
  
      // B7: Gắn url đó vào làm src của hình ảnh bên trong modal
      img.src = url;
    };
  }
  
  // Khi click vào modal thì đóng hình ảnh lại
  modal.onclick = function () {
    modal.style.display = "none";
  };
