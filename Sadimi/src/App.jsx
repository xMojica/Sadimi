import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/Home/ScrollToTop";
import Home from "./components/Home/Home";
import IniciarSesion from "./components/Login/IniciarSesion/IniciarSesion";
import Datos from "./components/Login/Registrarse/DatosPersonales"
// import Contacto from "./components/Login/Registrarse/Contacto"
// import Ubicacion from "./components/Login/Registrarse/Ubicacion"
// import Ingreso from "./components/Login/Registrarse/Ingreso"
import Recuperar from "./components/Login/Recuperar/RecuperarContraseña"
import Carrito from "./components/Carrito/Cart";
import Producto from "./components/Producto/Producto";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<IniciarSesion />} />
          <Route path="/Registrarse/" element={<Datos />}>
            <Route path="Datos" element={<Datos />}></Route>
            {/* <Route path="Contacto" element={<Contacto />}></Route>
            <Route path="Ubicacion" element={<Ubicacion />}></Route>
            <Route path="Ingreso" element={<Ingreso />}></Route> */}
          </Route>
          <Route path="/Recuperar" element={<Recuperar />} />
          <Route path="/Producto" element={<Producto />} />
          <Route path="/Carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
