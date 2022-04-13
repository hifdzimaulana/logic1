// Ganjil Atau Genap Chapter II

/**
 * Akan diberikan sebuah angka N. Dan akan diberikan N angka.
 */

let inputArray = [2, 3, 8, 9, 7];
let outputArray = []

outputArray = inputArray.map(val => val % 2 == 0 ? 'Genap' : 'Ganjil')
console.log(inputArray);
console.log(outputArray);