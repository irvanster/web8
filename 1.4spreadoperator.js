const biodata = {
    nama: 'Ari Wibowo',
    alamat: 'Pekalongan, Jawa Tengah',
    umur: 15
}

// 1. untuk mengganti object + menambah
//untuk ngedit data
const editedBiodata = {
    ...biodata, // kita mengambil object data dari biodata
    alamat: 'Jakarta Selatan, DKI',
    nama: 'Lukman',
    hobi: 'kopi',
}

console.log(editedBiodata)

// 2. menggabungkan multiple data menjadi satu

const bookHorror = [
    {title: 'Conjuring 2'},
    {title: 'IT'},
    {title: 'KKN'},
]

const bookComedy = [
    {title: 'Ada apa dengan cinta'},
    {title: 'OVJ'},
]

const allBooks = bookHorror.concat(bookComedy).concat().concat().concat() // buildin method/function / susah trace kalo banyak array
const allBookss = [...bookHorror, ...bookComedy, ...bookComedy, ...bookComedy, biodata] // spread operator = mengambil data object


console.log(allBookss)