/* let nama
console.log(nama) */
/* var nama
console.log(nama) */
/* const nama
console.log(nama) */
/* const nama = 'Tova'

var nama = 'Tova' */

// var 
// 1. bisa di deklarasi ulang
// 2. bisa diubah
// 3. global

//source coude
var nama// initialization dari codingan / data default
nama = "tova" // diganti / inputan
//source code
var nama = 'Tova Aku HACK' // dideklarasi ulang/ force attack
console.log(nama)


// let 
// 1. bisa diubah
// 2. tidak bisa di deklarasi ulang
// 3. tidak global / scoopnya terbatas (if, else, for, while not a function)
let namaLengkap = 'tova'
namaLengkap = 'ari'

console.log(namaLengkap)





for (var index = 0; index < [0,1,2,3].length; index++) {
    var element = [0,1,2,3][index];
}
console.log(element, 'kita ambil element')



// 3. 
// const = constant
// 1. tidak bisa diubah
// 2. tidak deklaari ulang
// 3. scoop terbatas
const namaBelakang = ' Tova'
namaBelakang = 'Ari'
// const namaBelakang = 'Maulana' //ga bisa di deklarasi ulang
console.log(namaBelakang)

// let input = 'Vikri' //
// let hasil
// function search() {
//     console.log(input)
//     hasil = 'Cari Bernama Vikri'
// }
// search()
// console.log(hasil) // hasil bukan didalam fungsi yang deklarasi hasil, maka hasil undefined


// 1. jangan sampai pake var 
//     1. di deklarasi ulang = let/const ga bisa
//     2. scoop ga terbatas = let/const itu ada scoop
//     3. futurable = kurang = let/const itu baru

// 2. kedepannya kita akan memakai const dan let
//     1. alasan kita pakai const 
//         1. peforma = const
//         2. biasanya kalo fungsi itu ditulis dengan menggunakan const karena fungsi = deklarasi/contant

//     2. alasan kita pakai let
//         1. ketika kita butuh operasi yang bisa diubah = let
//         2. ketika kita butuh operasi yang bisa dubah namun tidak global = let 


// const Search = ()=> {
//     console.log()
// }
// console.log(Search)