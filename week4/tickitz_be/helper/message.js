const useError = (errCode)=> {
    if(errCode === "ER_DUP_ENTRY") {
      return { message: "Email Already Use" }
    }
}
const useSuccess = (errCode)=> {
    if(errCode === "ER_DUP_ENTRY") {
      return { message: "Email Already Use" }
    }
    if(errCode === "ER_DUP_ENTRY") {
      return { message: "Email Already Use" }
    }
    if(errCode === "ER_DUP_ENTRY") {
      return { message: "Email Already Use" }
    }
    
}

module.exports = {
    useError,
    useSuccess
}



// const useMessage = {
//     error:(errCode)=> {
//         if(errCode === "ER_DUP_ENTRY") {
//           return { message: "Email Already Use" }
//         }
//     },
//     success:(errCode)=> {
//         if(errCode === "ER_DUP_ENTRY") {
//           return { message: "Email Already Use" }
//         }
//         if(errCode === "ER_DUP_ENTRY") {
//           return { message: "Email Already Use" }
//         }
//         if(errCode === "ER_DUP_ENTRY") {
//           return { message: "Email Already Use" }
//         }
        
//     }
// }

// module.exports = useMessage
//https://mariadb.com/kb/en/mariadb-error-codes/