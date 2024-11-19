import React, { useContext } from 'react'
import { Context } from '../../Context/main';
import { useNavigate } from 'react-router-dom';
import Hamburguesa from "../../assets/hamburguesa.svg"
import user from '../../assets/user.svg'
import Carrito from './IconoCarrito.jsx'
import Buscador from './Buscador.jsx'

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
            <header className='sticky left-0 top-0 z-[51] flex w-full flex-col items-center justify-center bg-tercero pb-8 sm:h-20 sm:pb-0'>
                <div className='flex h-16 w-full flex-row items-center justify-between rounded-xl px-2 md:px-4'>
                    <div className='flex h-12 items-center justify-start  p-2 sm:px-4 hover:cursor-pointer '>
                        <img className='h-12 w-12 rounded-xl p-2  hover:bg-segundo hover:shadow-lg' src={Hamburguesa} alt="menu" onClick={handleHamburguesa} />
                        <h1 className='flex p-2 text-start font-cursive text-3xl font-bold text-primero hover:scale-105 hover:cursor-pointer md:flex  md:translate-x-0 md:text-4xl' onClick={() => { navigate("/") }}>Sadimi</h1>
                    </div>
                    <span className='hidden  md:translate-x-2 sm:flex md:w-80'><Buscador /></span>
                    <div className='flex items-center gap-x-4'>
                        <span className='relative h-12 items-center flex rounded-xl p-2 sm:px-4 text-primero hover:scale-105 hover:cursor-pointer hover:bg-segundo hover:shadow-lg' onClick={clickCarrito}>
                            <Carrito color={"#4c7766"} />
                            {
                                carrito.length > 0 ?
                                    <span className='absolute left-1/2 top-0 flex h-4 w-4 items-center justify-center rounded-[50%] bg-cuarto text-[75%] font-normal text-tercero'>{carrito.length}</span> : null
                            }
                        </span>

                        <div className='flex h-12 items-center justify-between gap-1 rounded-xl border-quinto/20 p-2 md:px-8 text-lg font-bold hover:bg-segundo sm:hover:bg-primero text-primero md:bg-primero hover:scale-105 hover:cursor-pointer hover:shadow-lg '
                            onClick={clickUsuario}
                        >
                            <h3 className='hidden text-tercero md:flex '>{usuario.nombre || "Iniciar"}</h3>
                            <img src={user} alt="Usuario" className='h-7 md:hidden' />
                        </div>
                    </div>
                </div>

                <div className='flex h-10 w-full items-center justify-center px-2 sm:hidden'>
                    <Buscador />
                </div>

            </header >

        </>
    )
}
export default Header