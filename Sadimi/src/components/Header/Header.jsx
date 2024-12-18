import React, { useContext } from 'react'
import { Context } from '../../Context/main';
import { useNavigate, useLocation } from 'react-router-dom';
import Hamburguesa from "../../assets/hamburguesa.svg"
import user from '../../assets/user.svg'
import Carrito from './IconoCarrito.jsx'
import Buscador from './Buscador.jsx'

function Header() {
    const { usuario, carrito, cart, setCart, setUsuario } = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();

    function clickUsuario() {
        if (!usuario.nombre) {
            navigate("/Login");
        } else {
            navigate("/")
            //setUsuario({})
        }
    }

    function handleHamburguesa() { console.log("Abri el menu hamburguesa") }

    function clickCarrito() {
        if (usuario.nombre && location.pathname !== "/Carrito") {
            navigate("/Carrito");
        } else if (!usuario.nombre) {
            navigate("/Login");
        } else {
            navigate("/")
        }
    }
    return (
        <>
            <header className='sticky left-0 top-0 z-[55] flex w-full flex-col items-center pb-4 justify-center bg-tercero sm:h-20'>
                <div className='flex flex-row items-center justify-between w-full h-16 px-2 rounded-xl md:px-4'>
                    <div className='flex items-center justify-start h-12 hover:cursor-pointer '>
                        <img className='w-12 h-12 p-2 rounded-xl hover:bg-segundo hover:shadow-lg' src={Hamburguesa} alt="menu" onClick={handleHamburguesa} />
                        <h1 className='flex p-2 text-3xl font-bold text-start font-cursive text-primero hover:scale-105 hover:cursor-pointer md:flex md:translate-x-0 md:text-4xl' onClick={() => { navigate("/") }}>Sadimi</h1>
                    </div>
                    <span className='hidden md:translate-x-2 sm:flex md:w-80'><Buscador /></span>
                    <div className='flex items-center gap-x-4'>
                        <span className='relative flex items-center h-12 p-2 rounded-xl sm:px-4 text-primero hover:scale-105 hover:cursor-pointer hover:bg-segundo hover:shadow-lg' onClick={clickCarrito}>
                            <Carrito color={"#4c7766"} />
                            {
                                carrito.length > 0 ?
                                    <span className='absolute left-1/2 top-0 flex h-4 w-4 items-center justify-center rounded-[50%] bg-cuarto text-[75%] font-normal text-tercero'>{carrito.length}</span> : null
                            }
                        </span>

                        <div className='flex items-center justify-between h-12 gap-1 p-2 text-lg font-bold rounded-xl border-quinto/20 md:px-8 hover:bg-segundo sm:hover:bg-primero text-primero md:bg-primero hover:scale-105 hover:cursor-pointer hover:shadow-lg '
                            onClick={clickUsuario}
                        >
                            <h3 className='hidden text-tercero md:flex '>{usuario.nombre || "Iniciar"}</h3>
                            <img src={user} alt="Usuario" className='h-7 md:hidden' />
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center w-full h-10 px-2 sm:hidden'>
                    <Buscador />
                </div>

            </header >

        </>
    )
}
export default Header