// Penjualan Buah

/**
 * Perhatikan kasus berikut ini:
 * Anda sedang berjualan bermacam macam buah, dan anda ingin melihat buah apa yang paling laris di hari itu.
 * Anda memiliki data buah dan jumlah penjualan nya dalam kilogram.
 * Silahkan tentukan buah apa yang paling laris dari data yang telah dimasukkan secara custom.
 */

const penjualanBuah = [
    { nama: 'Durian', jumlah: 10 },
    { nama: 'Apel', jumlah: 10 },
    { nama: 'Mangga', jumlah: 10 },
    { nama: 'Jeruk', jumlah: 10 },
    { nama: 'Pepaya', jumlah: 10 },
]

penjualanBuah.sort((a, b) => {
    if (a.jumlah > b.jumlah) return 1
    if (a.jumlah < b.jumlah) return -1
    return 0
})

const palingLaris = penjualanBuah.slice(-1)[0]

console.log(palingLaris.nama)