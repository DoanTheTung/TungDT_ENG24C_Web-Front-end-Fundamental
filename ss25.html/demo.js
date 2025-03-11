// //
// //khai báo thông thường

// //input
// //process
// //output

// //hàm tính tổng
function calculateSum(number1, number2) {
    //logic
    let number1=10;
    let number2=20;
    return number1 + number2;
    console.log("hello world");
}

// //function Execution
// //thực thi hàm

// //đối số thực tế
// //arguments
// let sum = calculateSum(10, 20);//output :30
// calculateSum(1, 2);//output :3
// calculateSum(-2, 3);//output :1

// console.log(sum);

// mayPhaCaphe("hat ca phe ","nuoc","duong");//output: coc ca phe

//IIFE
(function (a ,b) {
    return a*b
})(10,20);

console.log(result);
//biểu thức hàm
let calculateResult = function (a, b) {
    return a/b;
};

calculateResult(10, 20);

let sum = (a, b) => a+b;
//{
//     ...
//     ...
//     ...
//     return a + b;
// };

console.log(sum(10,20));