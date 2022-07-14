import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Movies } from "./Pages/";
// import Home from "./Pages/Home";
// import Movies from "./Pages/Movies";
const MainNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="booking" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainNavigation;
