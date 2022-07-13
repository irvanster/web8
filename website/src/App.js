import './App.css';
import Navbar from './components/navbar'
import ItemMovie from './components/itemMovie'
import { useState } from 'react';
import axios from 'axios'
const App = ()=>{
  const [userLogin, setUserLogin] = useState(JSON.parse(localStorage.getItem('userLogin')) ?? {})
  // const [userLogin, setUserLogin] = useState({
  //   isLogin: false,
  //   data: {}
  // })
  const [formAddData, setFormAddData] = useState({
    email: '',
    password: ''
  })
  
  const handleLogin = async (e)=> {
    e.preventDefault()
    console.log(formAddData)
    try {
      const result = await axios({
        method: "POST",
        data: formAddData,
        url: 'https://test.dhanz.me/api/v1/auth/login'
      })
      console.log(result.data.data.token)
      // localStorage.setItem("token", result.data.data.token) // 1
      localStorage.setItem("userLogin", JSON.stringify({
        isLogin: true,
        data: result.data.data
      })) // 2 ✅
      setUserLogin((prevData)=> ({
        ...prevData,
        isLogin: true,
        data: result.data.data
      }))
      // kalo misal lebih dari 1 value / object maka dibutuhkan JSON.stringify()
      
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <>
      <Navbar  />
      <ItemMovie isLogin={userLogin.isLogin} />
      
      {userLogin.isLogin ?  (
      <div>
        KAMU UDAH LOGIN, INI ADA DATA KAMU
        [] [] [] [] []
      </div>

      ): (
      <div>
        KAMU BELOM LOGIN
        <form onSubmit={(e)=>handleLogin(e)}>
          <input type={'email'} placeholder="Masukkan email" onChange={(e)=>setFormAddData((prevData)=> ({
            ...prevData,
            email: e.target.value
          }))} /><br/>
          <input type={'password'} placeholder="Masukkan passwrd" onChange={(e)=>setFormAddData((prevData)=> ({
            ...prevData,
            password: e.target.value
          }))} />
          <button className='btn btn-primary' onClick={()=> handleLogin()}>Login</button>
        </form>
      </div>
      )}
    </>
  )
}
export default App;
