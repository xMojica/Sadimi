import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Header/Login";
import Carrito from "./components/Carrito/Cart";
import Producto from "./components/Producto/Producto";
import ScrollToTop from "./components/Home/ScrollToTop";


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Registrarse" element={<Login setTitulo="Datos personales" setOpen={true} />} />
          <Route exact path="/Producto" element={<Producto />} />
          <Route exact path="/Carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
