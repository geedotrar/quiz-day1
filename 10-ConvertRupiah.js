/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money, type) {
  let result = 0;
  if (type === "yen") {
    result += money * 130.12;
    let yenToIdr = new Intl.NumberFormat("ID", { style: "currency", currency: "IDR" }).format(result);
    return `${money} ${type} = ${yenToIdr}`;
  } else if (type === "usd") {
    result += money * 14382.5;
    let usdToIdr = new Intl.NumberFormat("ID", { style: "currency", currency: "IDR" }).format(result);
    return `${money} ${type} = ${usdToIdr}`;
  } else if (type === "euro") {
    result += money * 16000;
    let euroToIdr = new Intl.NumberFormat("ID", { style: "currency", currency: "IDR" }).format(result);
    return `${money} ${type} = ${euroToIdr}`;
  } else {
    return "no match type currency";
  }
}

console.log(convertToRupiah(1000, "yen")); //1000 yen  = Rp.130.120
console.log(convertToRupiah(100, "usd")); //100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100, "euro")); //100 dollar  = Rp.1.600.000
console.log(convertToRupiah(100, "")); //no match type currency
