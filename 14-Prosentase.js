/** Buat program untuk menampilkan prosentasi dari income*/

function getProsentase(start, end) {
  //   let result = Math.floor(((end - start) / start) * 100);
  //   return result;
  if (typeof start && typeof end === "number") {
    let result = Math.floor(((end - start) / start) * 100);
    if (result > 0) {
      return `Total kenaikan income ${result}%`;
    } else {
      return `Total penurunan income ${result}%`;
    }
  } else {
    return `${start} or ${end} harus dalam angka`;
  }
}

console.log(getProsentase("abc", "bca")); //abc or bca harus dalam angka
console.log(getProsentase(600000.0, 750000.0)); //Total kenaikan income 25%
console.log(getProsentase(750000.0, 650000.0)); //Total penurunan income -14%
