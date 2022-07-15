import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Movies } from "./Pages/";
import PrivateRoute from "./route/PrivateRoute";
import PublicRoute from "./route/PublicRoute";
// import { AuthLogout } from "./redux/actions/Auth";
// import Home from "./Pages/Home";
// import Movies from "./Pages/Movies";
const MainNavigation = () => {
  // const {data} = useSelector((state) => state.auth);

  //jwt kita set 1hours
  //backend itu buat endpoint untuk verify jwt, ketika udah lebih dari satu jam token digenerate & dipake maka diakan invalid
  // if invalid, maka nanti kita akan keluarkan err( TOKEN_INVALID)
  //if valid, ya ngga ngelakuin apa2
  // refresh ux nya user ga AuthLogout, by system dia ganti token, tapi masih tetep login
  // useEffect(()=> {
  //   axios.post('https://test.dhanz.me/api/v1/auth/check-token', {
  //     token: data.token
  //   }).then(()=> {})
  //   .catch(()=> {
  //     dispatch(AuthLogout()) // dia ketika invalid logout,
  //     dispatch(AuthRefresh({token: res.token}))//ketika dia invalid, maka dia akan diganti token yang sebelumnya menjadi token dari BE nya
  //   })


  //   // axios({
  //   //   method: "POST",
  //   //   url: "https://test.dhanz.me/api/v1/auth/check-token",
  //   //   data: {
  //   //     token: data.token
  //   //   }
  //   // })
  // }, )
  const Register = ()=> {
    return(
      <div>register</div>
    )
  }
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={
          <PublicRoute><Home /></PublicRoute>
        } />
        {/* Auth */}
       <Route path="login" element={
          <PublicRoute isRestricted={true}><Login /></PublicRoute>
        } />
       <Route path="register" element={
          <PublicRoute isRestricted={true}><Register /></PublicRoute>
        } />
        {/* Auth */}
        <Route path="dashboard" element={
          <PrivateRoute><Home /></PrivateRoute>
        } />
        <Route path="booking" element={
          <PrivateRoute><Home /></PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default MainNavigation;
