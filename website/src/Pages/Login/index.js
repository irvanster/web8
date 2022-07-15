import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AuthLogin } from "../../redux/actions/Auth"
import { useNavigate } from "react-router-dom";

const Login =({props})=> {
    const {data, error, loading, isLogin} = useSelector((state)=> state.auth)
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    })
    const handleLogin = (e)=> {
        e.preventDefault()
        // console.log(formLogin, 'ini data login')
        dispatch(AuthLogin(formLogin))
    }
    useEffect(()=> {
        if(isLogin === true) {
            navigate('/', {replace: true}) //kita menghapus routing login dari browser
        }else {
            navigate('/login', {replace: true})
        }
    },[isLogin]) //dependencies itu digunakan ketika misalkan ada perubahan state, artinya ketika handleLogin di klik, maka akan ada perubahan state
    // useeffect // pertamakali diload

    return(
        <form onSubmit={handleLogin}>
                <input type={'email'} placeholder="email" required onChange={(e)=> {
                    setFormLogin((prevData)=>({
                        ...prevData,
                        email: e.target.value
                    }))
                }}/><br/><br/>
                <input type={'password'} placeholder="password" required onChange={(e)=> {
                    setFormLogin((prevData)=>({
                        ...prevData,
                        password: e.target.value
                    }))
                }}/><br/>
                {loading ? (
                    <button className="btn btn-primary" disabled={true}>Loading..</button>
                    ):(
                    <button className="btn btn-primary">Login</button>
                )} {/* v2 */}
                {error && (
                    <div>{error.message}</div>
                )}
            {/* <button className={`btn btn-primary `} disabled={loading ? true:false}>{loading ? 'Loading...':'Login'}</button>  */}
            {/* v1 */}
        </form>
    )
}


export default Login