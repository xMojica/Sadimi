import React from 'react'

function Header() {
    return (
        <header className='flex h-16 w-full items-center justify-between px-2 sm:px-4'>
            <h1 className='hidden font-cursive text-4xl text-primero hover:scale-105 hover:cursor-pointer sm:flex'>Sadimi</h1>
            <div className='flex h-10 w-2/3 max-w-80 items-center rounded-xl bg-tercero p-1 pl-4 shadow-md sm:w-80'>
                <input className="flex h-full w-5/6 bg-tercero text-primero outline-none placeholder:text-primero" type="text" placeholder='Buscar' />
                <span className='sm:2/6 flex h-full w-1/6 items-center justify-center rounded-xl hover:cursor-pointer hover:bg-segundo'>
                    <img className='h-6 w-4/5 hover:cursor-pointer hover:bg-segundo' src="lupa.svg" alt="Lupa" />
                </span>
            </div>
            <div className='flex h-14 items-center gap-4'>
                <div className='relative flex rounded-xl p-2 px-4 hover:scale-105 hover:cursor-pointer hover:bg-segundo'>
                    <img src="carrito.svg" alt="Carrito de compras" className='h-7' />
                    <span className='absolute left-1/2 top-0 flex h-4 w-4 items-center justify-center rounded-[50%] bg-cuarto text-[80%] text-tercero'>6</span>
                </div>
                <button className='hidden rounded-xl p-2 px-4 text-lg font-bold text-primero hover:scale-105 hover:bg-segundo md:flex'>Iniciar sesion</button>
            </div>
        </header>
    )
}
export default Header