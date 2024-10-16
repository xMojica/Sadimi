import React, { useContext } from 'react'
import { Context } from '../../Context/main';
import { useNavigate } from 'react-router-dom';
import Hamburguesa from "../../assets/hamburguesa.svg"
import user from '../../assets/user.svg'
import Carrito from './IconoCarrito.jsx'
import Buscador from './Buscador.jsx'
import Cart from '../Carrito/Cart.jsx'

function Header() {
    const { usuario, carrito, cart, setCart, setUsuario } = useContext(Context);
    const navigate = useNavigate();

    function clickUsuario() {
        if (!usuario.nombre) {
            navigate("/Login");
        } else {
            navigate("/")
            setUsuario({})
        }
    }

    function handleHamburguesa() { console.log("Abri el menu hamburguesa") }

    function clickCarrito() {
        if (usuario.nombre) {
            navigate("/Carrito");
        } else {
            navigate("/Login")
        }
    }


    return (
        <>
            <header className='fixed left-0 top-0 z-[51] flex w-full flex-col items-center justify-center bg-tercero pb-8 shadow-lg sm:h-20 sm:pb-0'>
                <div className='flex h-16 w-full flex-row items-center justify-between rounded-xl px-2 md:justify-around md:px-4'>
                    <div className='flex h-10 items-center justify-start rounded-xl p-2 px-4 hover:cursor-pointer hover:bg-segundo sm:hidden' onClick={handleHamburguesa}>
                        <img className='h-7' src={Hamburguesa} alt="menu" />
                    </div>
                    <h1 className='flex translate-x-6 p-2 text-center font-cursive text-3xl font-bold text-primero hover:scale-105 hover:cursor-pointer md:mx-0 md:flex md:w-80 md:translate-x-0 md:text-4xl' onClick={() => { navigate("/") }}>Sadimi</h1>
                    <span className='hidden sm:flex md:w-96'><Buscador /></span>
                    <div className='flex h-10 items-center justify-end gap-x-2 md:w-80 md:min-w-60 md:justify-between'>

                        <span className='relative flex rounded-xl border-quinto/20 p-2 text-primero hover:scale-105 hover:cursor-pointer hover:bg-segundo sm:border-2 md:shadow-md md:hover:shadow-lg' onClick={clickCarrito}>
                            <Carrito color={"#4c7766"} />
                            {
                                carrito.length > 0 ?
                                    <span className='absolute left-1/2 top-0 flex h-4 w-4 items-center justify-center rounded-[50%] bg-cuarto text-[75%] font-normal text-tercero'>{carrito.length}</span> : null
                            }
                        </span>

                        <div className='flex items-center justify-between gap-4 rounded-xl border-quinto/20 p-2 px-4 text-lg font-bold text-primero hover:scale-105 hover:cursor-pointer hover:bg-segundo hover:shadow-lg sm:border-2 md:ml-6 md:shadow-md'
                            onClick={clickUsuario}
                        >
                            <h3 className='hidden font-bold text-primero md:flex'>{usuario.nombre || "Iniciar"}</h3>
                            <img src={user} alt="Usuario" className='h-7' />
                        </div>
                    </div>
                </div>

                <div className='flex h-10 w-full items-center justify-center px-4 sm:mx-4 sm:hidden'>
                    <Buscador />
                </div>

            </header >

        </>
    )
}
export default Header