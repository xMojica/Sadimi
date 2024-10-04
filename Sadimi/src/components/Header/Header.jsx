import React, { useContext } from 'react'
import Hamburguesa from "../../assets/hamburguesa.svg"
import Carrito from './IconoCarrito.jsx'
import Buscador from './Buscador.jsx'
import user from '../../assets/user.svg'
import { Context } from '../../Context/main';
import { useNavigate } from 'react-router-dom';

function Header() {
    const context = useContext(Context);
    const navigate = useNavigate();


    function handleClick() {
        navigate("/Login")
    }

    return (

        <header className='flex w-full min-w-96 flex-col'>
            <div className='flex h-16 w-full flex-row items-center justify-around rounded-xl px-2 md:px-4'>
                <div className='flex h-10 items-center justify-start rounded-xl p-2 px-4 hover:cursor-pointer hover:bg-segundo md:hidden' onClick={handleClick}>
                    <img className='h-7' src={Hamburguesa} alt="menu" />
                </div>
                <h1 className='mx-auto flex p-2 px-4 text-center font-cursive text-4xl font-bold text-primero hover:scale-105 hover:cursor-pointer md:mx-0 md:flex md:w-80'>Sadimi</h1>
                <span className='hidden md:flex'><Buscador /></span>
                <div className='flex h-10 items-center justify-end gap-4 md:w-80 md:min-w-60'>
                    <span className='relative flex rounded-xl p-2 px-4 text-primero hover:scale-105 hover:cursor-pointer hover:bg-segundo'>
                        <Carrito color={"#4c7766"} />
                        <span className='absolute left-1/2 top-0 flex h-4 w-4 items-center justify-center rounded-[50%] bg-cuarto text-[75%] font-normal text-tercero'>{context.contador}</span>
                    </span>
                    <div className='flex items-center rounded-xl p-2 px-4 text-lg font-bold text-primero hover:scale-105 hover:bg-segundo' onClick={handleClick}>
                        <img src={user} alt="Usuario" className='h-7' />
                    </div>
                </div>
            </div>

            <div className='flex h-16 w-full items-center justify-between px-2 md:hidden'>
                <Buscador />
                {/* <span className='relative ml-4 flex h-10 items-baseline justify-center rounded-xl p-2 px-4 text-center text-primero hover:scale-105 hover:cursor-pointer hover:bg-segundo'>
                    <Carrito color={"#4c7766"} />
                    <span className='absolute left-1/2 top-0 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-[50%] bg-cuarto text-[75%] font-normal text-tercero'>{context.contador}</span>
                </span> */}
            </div>

        </header >


    )
}
export default Header