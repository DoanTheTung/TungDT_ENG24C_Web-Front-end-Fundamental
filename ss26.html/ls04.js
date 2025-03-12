let arr = [];
let n = +prompt("Nhập vào số lượng phần tử: ");

for (let i = 0; i < n; i++) {
    let input = +prompt("Nhập phần tử cho mảng: ");
    arr.push(input);
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let primeNumbers = arr.filter(isPrime);

if (primeNumbers.length > 0) {
    console.log("Các số nguyên tố trong mảng là: " + primeNumbers);
} else {
    console.log("Mảng không chứa số nguyên tố nào.");
}
