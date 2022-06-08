const getNameUser = setTimeout(()=> {
    return 'Ari'
},3000)

async function searchName(name = 'ada', cb) {
    let output = await `${name.toLowerCase()}`
    return cb(output)
}


console.log(searchName(getNameUser,(data)=> {
    return data
}))