import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./components/menu";
import Footer from "components/footer";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<div>Página não encontrada</div>} />
      </Routes>
      
      <Footer />
    </BrowserRouter>

  );
}

export default AppRoutes;
