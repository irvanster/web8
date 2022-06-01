// const sayHello = (name) => {

//     const greeting = `haloo ${name}`
//     return showGreetings(greeting)
// }


// const showGreetings = (greeting)=> {
//     return greeting
// }


// console.log(sayHello('Dhani'))

const sayHello = (name, callback) => {

    const greeting = `haloo ${name}`
    return callback(greeting)
}


const showGreetings = (greeting)=> {
    return greeting
}


console.log(sayHello('Dhani', showGreetings))