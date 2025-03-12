let arr = [10, 9, 5, 11, 24, 5];
let maxNumber = Math.max(...arr);
let position = arr.indexOf(maxNumber);

console.log("Số lớn nhất trong mảng là: "+maxNumber+ " , ở vị trí: " +position);