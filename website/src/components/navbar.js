import RightNavbar from "./rightNavbar";


const Navbar = ()=>{
    //di component Navbar dia ga butuh isLogin, ga butuh juga setIsLogin
    // tapi di component RightNavbar dia butuhhin 2 2nya
    return <div style={{ backgroundColor: '#f0f0f0', padding: 15 }}>
        Navbar
        <RightNavbar />
    </div>
  }
  export default Navbar;
  