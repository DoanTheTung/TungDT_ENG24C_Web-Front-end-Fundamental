// function myFn(fn) {
//     fn()

//     return () => 10;
// }

// myFn(() => {});

let numberLit = [10, 30, 20 , 50 , 70];

// .forEach
// numberLit.forEach(function(element, index) {
//     console.log(index, element);
// });

//.map
// let newwArr = numberLit.map(function(element, index) {
//     return `Phần tử : ${element}`;
// });
// console.log(newwArr);

// let result = numberLit.filter(function(element, index){
//     return element > 20 && element < 70;
// });
// console.log(result);

numberLit.reduce(function(acc,cur) {
    console.log("acc",acc);
    console.log("cur",cur);
    return acc + cur;
},0);
console.log(result);