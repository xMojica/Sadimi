import React from 'react'
import Carrito from './Carrito.jsx'

function Header() {
    return (
        <header className='flex flex-col'>
            <div className='flex h-16 w-full flex-row items-center justify-between px-2 sm:px-4'>
                <div className='flex h-10 items-center justify-center rounded-xl p-2 px-4 hover:bg-segundo md:hidden'>
                    <img className='h-7' src="hamburguesa.svg" alt="menu" />
                </div>
                <h1 className='flex p-2 px-4 text-center font-cursive text-4xl text-primero hover:scale-105 hover:cursor-pointer md:flex md:w-80'>Sadimi</h1>
                <div className='hidden h-10 w-80 max-w-80 items-center rounded-xl bg-tercero p-1 pl-4 shadow-md md:flex md:w-80'>
                    <input className="flex h-full w-5/6 bg-tercero font-semibold text-primero outline-none placeholder:text-primero" type="text" placeholder='Buscar' />
                    <span className='sm:2/6 flex h-full w-1/6 items-center justify-center rounded-xl hover:cursor-pointer hover:bg-segundo'>
                        <img className='h-6 w-4/5 hover:cursor-pointer hover:bg-segundo' src="lupa.svg" alt="Lupa" />
                    </span>
                </div>
                <div className='flex h-10 items-center justify-end sm:gap-4 md:w-80'>
                    <span className='relative flex rounded-xl p-2 px-4 hover:scale-105 hover:cursor-pointer hover:bg-segundo'>
                        <Carrito client:load color={"#4c7766"} />
                        <span className='absolute left-1/2 top-0 flex h-4 w-4 items-center justify-center rounded-[50%] bg-cuarto text-[75%] font-normal text-tercero'>3</span>
                    </span>
                    <button className='hidden rounded-xl p-2 px-4 text-lg font-bold text-primero hover:scale-105 hover:bg-segundo md:flex'>Iniciar sesion</button>
                </div>
            </div>
            <div className='mt-6 flex h-16 w-full justify-center px-2 sm:px-4 md:hidden'>
                <div className='flex h-10 w-full items-center justify-center rounded-xl bg-tercero p-1 pl-4 shadow-md'>
                    <input className="flex h-full w-5/6 bg-tercero font-semibold text-primero outline-none placeholder:text-primero" type="text" placeholder='Buscar' />
                    <span className='sm:2/6 flex h-full w-1/6 items-center justify-center rounded-xl hover:cursor-pointer hover:bg-segundo'>
                        <img className='h-6 w-4/5 hover:cursor-pointer hover:bg-segundo' src="lupa.svg" alt="Lupa" />
                    </span>
                </div>
            </div>
        </header >
    )
}
export default Header