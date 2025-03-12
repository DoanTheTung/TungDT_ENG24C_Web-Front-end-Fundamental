let array = [];

for (let i = 0; i < 5; i++) {
    let input = +prompt("Mời nhập phần tử cho mảng: ");
    array.push(input);
}
let newwArr = array.filter(function(element,index){
    return element >= 10;
});
console.log(newwArr);