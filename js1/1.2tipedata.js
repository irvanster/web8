// tipe data
const nama = 'Ari' // string = harus ada petik `` "" ''
const umur = 200 // Number/Int
const isMarried = false // Boolean = true/false
let pakaian = ['Baju', 'celana','Topi']
// () = kurung
// {} = kurung kurawal
// [] = kurung siku
// `` = backtick / petik dibawah esc

const deskripsikanTentangAri = {
    nama: 'Ari',
    umur: 20,
    isMarried: false,
    interstProgramming: null,
    kepala: {
        wajah: 'putih',
        hidung: 'mancung',
        mata: 'belo',
    },
    pakaian: ['Baju', 'celana','Topi'], // array
    filmKesukaan: [
        {judul: 'Captain Marvel', genre: 'action superhero', year: '2020'}, //0
        {judul: 'Spongebob the movies', genre: 'kartun', year: '2018'}, // 1
    ]
} //object = menggabungkan beberapa value kedalam satu bagian/object

// console.log(deskripsikanTentangAri)
console.log(deskripsikanTentangAri.kepala.wajah)
console.log(deskripsikanTentangAri.pakaian[2]) //array dimulai dari 0
console.log(deskripsikanTentangAri)

// null = isinya kosong, tapi ada wadahnya
// undefined = isinya kosong dan ga ada wadahnya

// ada wadah tisu
// kalo tisunya kosong = null, wadah masih ada.
// kalo tisunya ngga ada, undefined kita ga punya

console.log(typeof umur)
console.log(typeof(umur))

// if(typeof umur == 'number'){
if(typeof(umur) == 'number'){
    console.log('lanjut')
}else {
    console.log('umur bukan number')
}

console.log(deskripsikanTentangAri.kepala.wajah)
console.log(deskripsikanTentangAri.pakaian[2]) //array dimulai dari 0
// console.log(deskripsikanTentangAri)
console.log(deskripsikanTentangAri.filmKesukaan[0].genre)

// deskripsikanTentangAri.filmKesukaan.map(function (item) {
//     console.log(item.judul)
// })
deskripsikanTentangAri.filmKesukaan.map((film, urutan)=> {
    console.log(`${urutan+1} ${film.judul} dan ${film.genre} tambahin text & variable ${umur} ${film.year}`) // backtic
    // console.log(urutan+1, film.judul + ' dan ',film.genre)
})


// 1. compiler
//  ketika programnya akan dijalankan, itu harus compiling
//  contoh: exe, msi, .deb (executable, installable), ketika di save nanti akan compile (daemon)

// 2. interpreter
//  ketika programnya dibuka, itu melakukan translate proses
//  contoh: website () , ketika disave itu langsung ada perubahan (hot reload)









