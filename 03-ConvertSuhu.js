/**
 * konversi fareinheit to kelvin
 * rumus Kelvin = (Fareinheit + 459.67)/1.8
 *
 */

function fareinheitToKelvin(fareinheit) {
  if (isNaN(fareinheit) === false) {
    let result = Math.round((fareinheit + 459.67) / 1.8);
    return `Convert Fareinheit (${fareinheit}) to Kelvin = ${result}`;
  } else if (isNaN(fareinheit) === true) {
    return "Fareinheit must an number";
  }
}

console.log(fareinheitToKelvin(45)); //Convert Fareinheit (45) to Kelvin = 280
console.log(fareinheitToKelvin("1")); //Convert Fareinheit (1) to Kelvin = 811
console.log(fareinheitToKelvin("F")); //Fareinheit must an number
