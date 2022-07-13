const RightNavbar = ()=> {
    const userLogin = JSON.parse(localStorage.getItem('userLogin')) ?? {} //v1
    // const authUser = localStorage.getItem('userLogin')
    // let userLogin = {}
    // if(authUser) {
    //     userLogin = JSON.parse(authUser)
    // } //v2
    if(userLogin.isLogin) {
        return(
            <div style={{float:"right"}} onClick={()=> {
                alert('Selamat Datang')
            }}>{userLogin.data.firstName}!</div>
        )
    }else {
        return(
            <div style={{float:"right"}} onClick={()=> {
                // setIsLogin(true)
            }}>Login</div>
        )
    }
}

// const RightNavbar = (props)=> {
//     if(isLogin) {
//         return(
//             <div style={{float:"right"}} onClick={()=> {
//                 alert('Selamat Datang')
//             }}>Hi Trevin!</div>
//         )
//     }else {
//         return(
//             <div style={{float:"right"}} onClick={()=> {
//                 setIsLogin(true)
//             }}>Login</div>
//         )
//     }
// }


export default RightNavbar