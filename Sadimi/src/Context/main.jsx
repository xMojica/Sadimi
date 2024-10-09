import React, { useState } from "react";
export const Context = React.createContext();

export default function ContextProvider({ children }) {

    const [contador, setContador] = useState(0);
    const [busqueda, setBusqueda] = useState("")
    const [mostrarLogin, setMostrarLogin] = useState(false);
    const [open, setOpen] = useState(false);
    const [token, setToken] = useState("");
    const [menuVisiblePaises, setMenuVisiblePaises] = useState(false)
    const [menuVisibleDepartamentos, setMenuVisibleDepartamentos] = useState(false)
    const [menuVisibleCiudades, setMenuVisibleCiudades] = useState(false)
    const [tipo, setTipo] = useState();
    const [mensaje, setMensaje] = useState()
    const [usuario, setUsuario] = useState({});

    return (
        <Context.Provider value={{
            contador, setContador, busqueda, setBusqueda, mostrarLogin, setMostrarLogin,
            open, setOpen, token, setToken, menuVisiblePaises, setMenuVisiblePaises,
            menuVisibleDepartamentos, setMenuVisibleDepartamentos, menuVisibleCiudades, setMenuVisibleCiudades,
            tipo, setTipo, mensaje, setMensaje, usuario, setUsuario
        }}>
            {children}
        </Context.Provider>
    );
}
