//declatartion function / traditional function
// function additionNumber(num) { //parameter
//     console.log(`halo world ${num}`)
// }
// //expression function /
// const additionSum = function(num) {
//     console.log(`halo world ${num}`)
// }

//arrow function
// const additionMerge = (num) => {
//     console.log(`halo world ${num}`)
// }

// //function tidak dapat bekerja kalau kita tidak memanggilnya
// // additionNumber(5) //argument (5)
// additionMerge(15)
// additionSum(10)


// const additionMerge = (num1, num2, operator='tambah') => { //default value
//     if(operator == 'bagi') {
//         console.log(`bagi =  ${num1/num2}`)
//     }else if (operator == 'tambah') {
//         console.log(`penjumlahan =  ${num1+num2}`)
//     }else if(operator == 'kurang') {
//         console.log(`kurang =  ${num1-num2}`)
//     }else {
//         console.log('operator salah')
//     }
//     /** 
//      * default value digunakan ketika data yang tidak diubah akan tetap mengikuti defaultnya, namun ketika ada argument yang digunakan maka akan mengikuti argument tersebut
//      * contoh: form, ketika tidak terisi gender = null/default
//      * ketika sudah dipilih, maka berdasarkan value yang diinputkan
//     */
    
// }
// additionMerge(15, 50, 'bagi') //argument

// const formInput = {num1: 1, num2: 50, operator: 'bagi'}
// const additionMerge = ({num1:numeric1, num2, operator='tambah'}) => {
//     // const {num1, num2, operator} = input //cara 2
//     if(operator == 'bagi') {
//         console.log(`bagi =  ${numeric1/num2}`)
//     }else if (operator == 'tambah') {
//         console.log(`penjumlahan =  ${numeric1+num2}`)
//     }else if(operator == 'kurang') {
//         console.log(`kurang =  ${numeric1-num2}`)
//     }else {
//         console.log('operator salah')
//     }
    
// }
// additionMerge(formInput) //argument


const formInput = {num1: 1, num2: 50, operator: 'bagi'}
const additionMerge = ({num1:numeric1, num2, operator='tambah'}) => {
    // const {num1, num2, operator} = input //cara 2
    // if(operator == 'bagi') {
    //    return(`bagi =  ${numeric1/num2}`)
    // }else if (operator == 'tambah') {
    //    return(`penjumlahan =  ${numeric1+num2}`)
    // }else if(operator == 'kurang') {
    //    return(`kurang =  ${numeric1-num2}`)
    // }else {
    //    return('operator salah')
    // }
    
    let hasil;
    if(operator == 'bagi') {
       hasil = `bagi =  ${numeric1/num2}`
    }else if (operator == 'tambah') {
       hasil = `penjumlahan =  ${numeric1+num2}`
    }else if(operator == 'kurang') {
       hasil = `kurang =  ${numeric1-num2}`
    }else {
       hasil = 'operator salah'
    }
    
    return hasil
}
// console.log(additionMerge(formInput))



// const search = (query)=> {

//     return (`${query} aowkowkow`)
// }

// console.log(search('awoks'))


const quiz = ({answer})=> {
    // const {name, kelas, answer} = user //opsi (destructuring)
    return additionMerge(answer)

}


console.log(quiz({
    name: 'Dzakia',
    kelas: 'XI',
    answer:{num1: 1, num2: 50, operator: 'bagi'}
}))