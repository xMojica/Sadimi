import React, { useState } from "react";
export const Context = React.createContext();

export default function ContextProvider({ children }) {

    const [busquedaProducto, setBusquedaProducto] = useState("") // Filtrar un producto
    const [mostrarLogin, setMostrarLogin] = useState(false); // Mostrar el login y navegar entre el formulario
    const [open, setOpen] = useState(false); // Para mostrar o ocultar el alert 
    const [token, setToken] = useState(""); // para la api de paises
    const [menuVisiblePaises, setMenuVisiblePaises] = useState(false) // Desplegable para seleccionar paises
    const [menuVisibleDepartamentos, setMenuVisibleDepartamentos] = useState(false) // Desplegable para seleccionar departamentos
    const [menuVisibleCiudades, setMenuVisibleCiudades] = useState(false) // Desplegable para seleccionar ciudades
    const [tipo, setTipo] = useState(); // Para el tipo del alert "error o success"
    const [mensaje, setMensaje] = useState() // mensaje del alert
    const [usuario, setUsuario] = useState({}); // Usurio que se logea
    const [carrito, setCarrito] = useState([]); // array con el carrito de compras
    const [registro, setRegistro] = useState({}) // para manejar los datos cuando se este registrando la persona
    const [cart, setCart] = useState(false) // para abrir o cerrar el aside del carrito de compras
    const [contadorCarrito, setContadorCarrito] = useState(carrito.length); // Contador para el carrito

    return (
        <Context.Provider value={{
            contadorCarrito, setContadorCarrito, busquedaProducto, setBusquedaProducto, mostrarLogin, setMostrarLogin,
            open, setOpen, token, setToken, menuVisiblePaises, setMenuVisiblePaises,
            menuVisibleDepartamentos, setMenuVisibleDepartamentos, menuVisibleCiudades, setMenuVisibleCiudades,
            tipo, setTipo, mensaje, setMensaje, usuario, setUsuario, carrito, setCarrito, registro, setRegistro, cart, setCart
        }}>
            {children}
        </Context.Provider>
    );
}
