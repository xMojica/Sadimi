import React, { useState } from "react";
export const Context = React.createContext();

export default function ContextProvider({ children }) {
    const [contador, setContador] = useState(0);
    const [busqueda, setBusqueda] = useState("")
    const [mostrarLogin, setMostrarLogin] = useState(false);

    return (
        <Context.Provider value={{ contador, setContador, busqueda, setBusqueda, mostrarLogin, setMostrarLogin }}>
            {children}
        </Context.Provider>
    );
}
