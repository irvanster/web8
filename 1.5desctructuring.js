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

const {nama, kepala: {wajah, mata}, pakaian} = deskripsikanTentangAri
const editData = {
    nama: nama,
    kepala: {
        wajah: wajah,
        mata: mata,
    },
    pakaian: pakaian,
}
console.log(editData)
const array = ['sepeda','motoraa','becak','bemo']

const [,motorFavorit] = array
console.log(motorFavorit)








// const {data, error, loading}= getData()


// dataProfile
