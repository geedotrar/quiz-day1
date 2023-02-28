/**
 * input 4 digit integer lalu hitung jumlahnya
 */

function sumDigit(n) {
  if (n > 9999) {
    return `${n} harus lebih kecil dari 1000`;
  } else if (n < 9999) {
    let num1 = n / 1000;
    let num2 = (n % 1000) / 100;
    let num3 = (n % 100) / 10;
    let num4 = n % 10;
    let total = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4);
    return total;
  } else {
    return `${n}  is not number, try again...`;
  }
}

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234")); //10
console.log(sumDigit(12345)); //12345 harus lebih kecil dari 10000
console.log(sumDigit("a123")); //a123 is not number, try again...
