let data = undefined
// setTimeout(()=> {
//     data = [
//         {title: 'Baju Renang'},
//         {title: 'Baju Batik'},
//         {title: 'Baju Batik'},
//         {title: 'Baju Batik'},
//         {title: 'Baju Batik'},
//         {title: 'Baju Batik'},
//     ]
// },3000)

const getProducts = ()=> new Promise((resolve, reject)=> { //parameter bisa diganti, (resolve = success)
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
async function fetch(){ 
    try {
        const data = await getProducts()
        console.log(data)
    } catch (error) {
        console.log(error, 'heheh')
    }
}
// console.log(data)
console.log(fetch())


getProducts.then(()=> {

}).catch(()=> {

})

function fetch() {
    try {
        const data = await getProducts()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


//silahkan cek di bagian promise.js