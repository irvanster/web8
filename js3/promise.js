const axios = require('axios').default
// const fetch = require('node-fetch')
//client  = hey dio kita nanti malam mabar yuk?
//server = 


//client = 1. bisa iya nanti malam mabar
            // 2. bisa aja ngga, karena ada dadakan/hal lain

// server = 1. bisa memenuhi
            // 2. bisa enggak


//hey aku mau ambil semua barang/products = janjian/client
// data dibawah ini = server = dio
// const data = [
//     {title: 'Baju Renang'},
//     {title: 'Baju Batik'},
// ]


//server
// 1. kesalahan query, data undefined
// 2. server down / ga jadi ditempat/ngga bisa memenuhi permintaan
// 3 . lain-lain (unreachable)
// catch = batal janjian

//client
// 1. kesalahan pengambilan url (salah alamat)
// 2. input dari client itu tidak sesuai 
// 3.bensin habis = internetnya ga ada data
//ada janjian disebuah acara, dimana ada card id diwajibkan ketika harus masuk
// clientnya itu tidak punya kartu akses = batal janjian
// authentication, userID, password, 
// ketika kartunya ga sesuai maka batal.
const data = undefined
// const data = [
//     {title: 'Baju Renang'},
//     {title: 'Baju Batik'},
//     {title: 'Baju Batik'},
//     {title: 'Baju Batik'},
//     {title: 'Baju Batik'},
//     {title: 'Baju Batik'},
// ]
const getProducts = new Promise((resolve, reject)=> { //parameter bisa diganti, (resolve = success)
if(data) { //harapan
    if(data.length < 5) {
        reject({
            message: 'aku ga mau, karena ada yang kurang',
            data: []
        })
    }else {
        resolve({
            message: 'sucess ambil data',
            data: data
        }) //fullfiled / terpenuhi
    }
}else {
    reject({
        message: 'gagal ambil data',
        data: []
    }) //rejected / gagal
}
}) 

//fullfiled  = resolve dan penggunaannya pakai .then
//rejected = reject dan penggunaannya pakai catch

getProducts.then((data)=> { //realita / action
    console.log(data,)
    // udah dapat token
}).then(()=> {
    console.log('weh terimakasih')
    //redirect ke halaman mana
    //set ke variable apa
}).then(()=> {
    console.log('oke aku pulang')  
}).catch((err)=> {
    console.log({
        message: 'waaah parahlu di janjiin tapi'
    }) //tidak sesuai
    console.log(err) //sesuai akad/harapan yang tadi
}).finally(()=> {
    //mau berhasil/engga, itu tetap akan di lakukan pemanggilan
    console.log('data terfetch')
    //mendebug sesuatu.
    //loading = false
    //
})

// async function fetch() {
//     try {
//         const data = await getProducts
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

//async/await = membuat function yang kita buat menjadi syncronoush, berurutan.
//fetch()
//fetch axios, promise, dan datanya diambil dari pihak luar, 
// artinya akan ada delay pengambilan/pengiriman datanya akan ada loading
let posts
async function fetch() {
    try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/posts')//harus ditunggu
        // console.log(result) //menjalankan ini dulu, kalo tanpa await
        // axios = result.data
        result.data.map((item)=> {
            console.log(item.id)
        })
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log('fetch telah dilakukan')
    }
}


fetch()
// alert('oawkowkowkoaww')
//custom error
// try {
//     awokwoadkoaod
// } catch (error) {
//     console.log('error bro')
// }
// fetch('')
// alert('ada')
// prompt('ada')
// axios

// node-fetch