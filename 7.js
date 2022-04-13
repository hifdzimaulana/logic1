// Apakah semua berbeda?

/**
 * Bayangkan anda memiliki sebuah array.
 * Array ini adalah array angka, dan anda ingin tau apakah ada nilai yang sama di dalamnya.
 * Silahkan tentukan apakah ada nilai yang sama di dalam array yang diberikan.
 */

const inputArray = [1, 2, 3, 4, 7, 8]
let found = false

inputArray.sort().reduce((prev, current) => {
    if (prev == current) found = true
    return current
})

found ? console.log('ADA') : console.log('TIDAK ADA');