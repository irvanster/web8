const umur = 120
const role = 'operator'
// if(umur < 18) {
//     console.log('tidak boleh masuk')
// }else {
//     console.log('boleh masuk')
// }
// if(umur != 5) {
//     console.log('boleh masuk')
// }else {
//     console.log('tidak boleh masuk')
// }



// if(role === 'admin') {
//     console.log('boleh masuk')
// }else if(role == 'operator') {
//     console.log('tidak boleh masuk')
// }else {
//     console.log('gaboleh masuk')
// }

// switch (role) {
//     case 'admin':
//         console.log('boleh masuk')
//         break;
//     case 'operator':
//         console.log('boleh masuk')
//         break;

//     default:
//         console.log('tidak boleh masuk')
//         break;
// }


// if else vs switch case
// 1. if else = operasi yang membutuhkan perhitungan/logic
// 2. switchcase = operasi yang tidak membutuhkan perhitungan/logic yang rumit, 


// if(umur !== '20') {
//     console.log('boleh masuk')
// }else {
//     console.log('tidak boleh masuk')
// }


//ternary operator
console.log(umur > 18 ? `umur ${umur} boleh masuk`:'tidak boleh masuk')
console.log(
    role == 'admin' ? 'boleh masuk':role == 'operator' ? 'boleh masuk':'tidak boleh masuk')

    // else if dengan else disini itu ngga ada, 
    // else if sama else itu diambil secara otomatis dari yang paling belakang
// alert('aduba')