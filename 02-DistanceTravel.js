/** hitung jarak antar kota
 *  dimana rumus jarak S = 1/2*a*t^2
 *  function calculateDistance(a,t),
 *  where a = accelaration in number
 *  t : time
 */

function calculateDistance(a, t) {
  if (a < 0 || t < 0) {
    return `Accelaration or time must be >= 0`;
  } else if (typeof a && typeof t === "number") {
    let result = (a / 2) * Math.pow(t, 2);
    return `Jarak yang ditempuh adalah ${result} meter/s`;
  } else {
    return `input must an number`;
  }
}

console.log(calculateDistance("a", "t")); //input must an number
console.log(calculateDistance(-1, 9)); //Accelaration or time must be >= 0
console.log(calculateDistance(50, 60)); //Jarak yang ditempuh adalah 90000 meter/s
