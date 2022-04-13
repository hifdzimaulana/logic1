// Berapakah Jumlahnya ?

/**
 * Akan diberikan sebuah angka. sebut saja angka ini N. Hitunglah total penjumlahan dari angka 1 – N.
 */

const input = 6
const output = () => {
    var result = 0
    for (let i = 1; i <= input; i++) {
        result += i
    }
    return result
}
console.log(output())