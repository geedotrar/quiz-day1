/**
 * hitung detik ke dalam day, hour, minute and seconds
 */

function getPeriodTimes(seconds) {
  if (isNaN(seconds) === false) {
    let d = Math.floor(seconds / (3600 * 24));
    let h = Math.floor((seconds % (3600 * 24)) / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor(seconds % 60);
    return `${d} hari ${h} jam ${m} menit ${s} detik `;
  } else {
    return `${seconds} is not number`;
  }
}
// 1 menit = 60 dt
// 1 jam = 3600 dt
// 24 jam = 86400

console.log(getPeriodTimes("700005A")); //700005A is not number
console.log(getPeriodTimes("700005")); //8 hari 2 jam 26 menit 45 detik
