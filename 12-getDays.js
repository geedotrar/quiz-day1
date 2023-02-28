/** Display year is kabisat and display month */

function getDays(month, year) {
  if (isNaN(month) === true && isNaN(year) === true) {
    return `inputan bulan & tahun harus dalam integer`;
  } else if (isNaN(month) === false && isNaN(year) === true) {
    return `inputan tahun harus dalam integer`;
  } else if (isNaN(month) === true && isNaN(year) === false) {
    return `inputan bulan harus dalam integer`;
  } else if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    return `This month has 29 days, ${year} adalah tahun kabisat`;
  } else {
    return `This month has 31 days`;
  }
}

console.log(getDays("a", 2021)); //inputan bulan harus dalam integer
console.log(getDays("2", "year")); //inputan tahun harus dalam integer
console.log(getDays("m", "year")); //inputan bulan & tahun harus dalam integer
console.log(getDays(2, 2000)); //This month has 29 days, 2000 adalah tahun kabisat
console.log(getDays(8, 2021)); //This month has 31 hari

// --------------------------------------------------------------------------------------------------------------

// const leap = new Date(year, 1, 29).getDate() === 29;
// if (leap) {
//   return `This month has 29 days, ${year} adalah tahun kabisat`;
// } else {
//   return `This month has 31 days`;
// }
