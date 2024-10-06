import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Header/Login";
import DatosPersonales from "./components/Login/Registrarse/DatosPersonales";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Registrarse" element={<DatosPersonales />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
