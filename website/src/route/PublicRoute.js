import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, useNavigate } from "react-router-dom"

//private route = ketika user yang ga memilik token dia harus login/tidak boleh masuk = dashboard, profile user,.
//public route =

// 1.
// publicRoute = ketika user sudah memiliki token dia gaboleh masuk = login, register, lupa password. (restricted)
// publicRoute = ketika user yang tidak memiliki token boleh masuk = login, register, lupa password. (restricted)
// 2.
// publicRoute = ketika user sudah login atau belum itu boleh masuk = homepage, dll
const PublicRoute = ({children, isRestricted=false})=> {
    const navigate = useNavigate()
    const {isLogin} = useSelector((state) => state.auth);
    useEffect(()=> {
        if(isRestricted) {
            console.log(isLogin, 'cek data dari redux')
            if(isLogin == true) {
              navigate('/', {replace: true})
            }
        }
  },[isLogin])
    return(children)
}

export default PublicRoute