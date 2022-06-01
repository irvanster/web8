const bycript = (input)=> {
    return `${input.replace(' ','')}-${Math.random()}`
}

const crypto = (input)=> {
    return `${input.split(' ').reverse().join()}`
}


const hashing = (input, typeOfHash)=> {
    //dengan callback function kita tidak perlu membuat if else, karena sudah menjadi parameter jadi kita define di argument pada saat memanggil fungsi tersebut, sesuai apa yang kita gunakan. dimana hal biasanya yang kita gunakan adalah seperti ini:
    // if(typeOfHash == 'bycript') {
    //     return bycript(input)
    // }else if(typeOfHash == 'crypto') {
    //     return crypto(input)
    // }
    //dengan cb kita tidak perlu.
    return typeOfHash(input)
}
console.log(hashing('Ari Wibowo Good Looking', bycript))















// require('crypto')

// console.log(hashing('Ari Wibowo Good Looking', bycript))





// let hasil = hashing('adadada')
// let hashed = crypto(hasil)
// let result = salt()

// console.log(result)