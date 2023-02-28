/**
 * Hitung pajak dari total penjualan
 * function getSalesTax(price, tax)
 */

// tax = 10%
function getSalesTax(price, tax) {
  if (typeof price !== "number" && typeof tax !== "number") {
    return `price & tax harus dalam angka`;
  } else if (typeof price !== "number" && typeof tax === "number") {
    return `price harus dalam angka`;
  } else if (typeof price === "number" && typeof tax !== "number") {
    return `tax harus dalam angka`;
  } else {
    let result = price + tax;
    return `
    Total Sales : Rp.${price}
    Pajak : ${tax * 0.1}
    TotalHarga+Pajak : Rp.${result}`;
  }
}

console.log(getSalesTax("a", 1)); //Price harus dalam angka
console.log(getSalesTax(500, "pajak")); //Pajak harus dalam angka
console.log(getSalesTax("harga", "pajak")); //Pajak dan Price harus dalam angka
console.log(getSalesTax(4500, 5));
/**
 Total Sales : Rp.4500
 Pajak : 0.5
 TotalHarga+Pajak : Rp.4505
 
*/
