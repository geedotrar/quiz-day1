/**
 * hitung sales discount plus tax rate
 * function getSalesDiscount
 */

function getSalesDiscount(price, tax, discount) {
  const disc = price * 0.05;
  const afterdisc = price - disc;
  const pajak = afterdisc * 0.1;
  const totalPayment = pajak + afterdisc;
  if (typeof price !== "number" && typeof tax !== "number" && typeof discount !== "number") {
    return `Price, Tax & Discount harus dalam angka`;
  } else if (typeof price !== "number" && typeof tax !== "number" && typeof discount === "number") {
    return `Price & Tax harus dalam angka`;
  } else if (typeof price !== "number" && typeof tax === "number" && typeof discount !== "number") {
    return `Price & Discount harus dalam angka`;
  } else if (typeof price === "number" && typeof tax !== "number" && typeof discount !== "number") {
    return `Tax & Discount harus dalam angka`;
  } else if (typeof price !== "number" && typeof tax === "number" && typeof discount === "number") {
    return `Price harus dalam angka`;
  } else if (typeof price === "number" && typeof tax !== "number" && typeof discount === "number") {
    return `Tax harus dalam angka`;
  } else if (typeof price === "number" && typeof tax === "number" && typeof discount !== "number") {
    return `Discount harus dalam angka`;
  } else {
    return `
        Total Sales 	    : Rp.${price}
        Discount (5%) 	    : Rp.${disc}
        PriceAfterDiscount  : Rp.${afterdisc}
        Pajak (10%) 	    : Rp.${pajak}
        ----------------------------------
        TotalPayment 	    : Rp.${totalPayment}`;
  }
}

console.log(getSalesDiscount("a", 1, 5)); //Price harus dalam angka
console.log(getSalesDiscount(500, "pajak", 5)); //Pajak harus dalam angka
console.log(getSalesDiscount("harga", "pajak", "discount")); //Price, Tax & Discount harus dalam angkaa
console.log(getSalesDiscount(4500, 10, 5));
/**
    Total Sales 	: Rp.4500
    Discount (5%) 	: Rp.225
    PriceAfterDiscount 	: Rp.4275
    Pajak (10%) 	: Rp.427.5
    ----------------------------------
    TotalPayment 	: Rp.4702.5
 */
