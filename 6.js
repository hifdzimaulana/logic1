// Mungkinkah?

/**
 * Akan diberikan dua angka, N dan K. Dan akan diberikan array dengan panjang N.
 * Silahkan tentukan apakah bisa mendapatkan nilai K dengan menjumlahkan 2 angka
 * dari array yang diberikan.
 */

const expectedSum = 10
const inputArray = [4, 2, 3, 5, 1]
let found = false

for (let i = 0; i < inputArray.length - 1; i++) {
    for (let x = 1; x < inputArray.length - i; x++) {
        if (inputArray[i] + inputArray[i + x] == expectedSum) found = true
    }
}

found ? console.log('ADA') : console.log('TIDAK ADA');;