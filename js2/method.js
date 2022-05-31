const films = {
    title: 'Avengers',
    year: 2020,
    edit: function(title, year) {
        this.title = `${title}`
        this.year = `${year}`
        console.log(`aku mengganti film film baru ${title}`)
    }
}

//method = sebuah fungsi didalam object
//dengan this. kita bisa mengambil value dari objectnya sendiri
//dengan catatan kita menggunakan function declarative, kalo pake arrow function dia method tidak bisa memanggil this.


films.edit('spongebob', 2021)
const {title, year} = films
console.log({
    title, year
})



// const posts = {
//     getAll:({status})=>{
//         ///kita bisa ambil semua article.
//         const posts = db.query(`select * from posts ORDER BY date AND status=${status}`)
//         return posts
//     },
//     getById:()=>{

//     },
//     updateById:(fields)=>{
//         const posts = db.query(`update where ${fields}=${fields} `)
//         return posts
//     },
//     delete:function(req, res, {adada}){
//         //hard delete
//         // db.query('delete by id').then(()=> {
//         //     return {
//         //         message: 'success delete'
//         //     }
//         // })
//         //soft delete 
//         this.updateById({id: id, status: 'deleted'})
//     },
// }

// ///kita ngga bisa pake arrow function untuk memanggil this

// // const posts = require('../js2/controller/posts')
// // posts.getAll()
// posts.getAllPosts({filter: 'all'})
// //output
// [
//     {id: 1, title: 'Laptop Huawei Di Ban'},
//     {id: 2, title: 'Laptop Huawei Di Ban'},
//     {id: 3, title: 'Laptop Huawei Di Ban'},
//     {id: 4, title: 'Laptop Huawei Di Ban'},
//     {id: 5, title: 'Laptop Huawei Di Ban'}
// ]

// posts.getById(5)
// posts.delete(5)
// //output
// // {id: 5, title: 'Laptop Huawei Di Ban'}



// //posts
// // ada beberapa metode
// // bisa nambah
// // bisa delete
// // bisa get
// // bisa update
// // crud









const data = {
    published: [
        {id: 1, title: 'Laptop Huawei Di Ban', status: 'publish'},
        {id: 2, title: 'Laptop Huawei Di Ban', status: 'publish'},
        {id: 3, title: 'Laptop Huawei Di Ban', status: 'publish'},
        {id: 4, title: 'Laptop Huawei Di Ban', status: 'publish'},
    ],
    deleted: [
        {id: 1, title: 'Laptop Huawei Di Ban', status: 'delete'},
        {id: 2, title: 'Laptop Huawei Di Ban', status: 'delete'},
        {id: 3, title: 'Laptop Huawei Di Ban', status: 'delete'},
        {id: 4, title: 'Laptop Huawei Di Ban', status: 'delete'},
]
}
const posts = {
    getAll: ({status = 'publish'})=> {
        if(status == 'delete') {
            return data.deleted
        }else {
            return data.published
        }
    }
}


const result = posts.getAll({status: 'delete'})

console.log(result)












