import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Menu from "./components/menu";
import Footer from "components/footer";
import StandardPage from "pages/standardPage";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>
        <Route path = '/' element = { <StandardPage /> }>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
        </Route>

        <Route path='*' element={<div>Página não encontrada</div>} />
      </Routes>
      
      <Footer />
    </BrowserRouter>

  );
}

export default AppRoutes;
