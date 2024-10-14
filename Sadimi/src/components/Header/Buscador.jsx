import React, { useContext, useEffect, useState } from 'react';
import Lupa from './../../assets/lupa.svg';
import { Context } from '../../Context/main';

function Buscador() {
    const context = useContext(Context);

    function handleChange(e) {
        context.setBusquedaProducto(e.target.value);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <div className='mr-4 hidden h-10 w-full items-center rounded-xl bg-tercero p-1 pl-4 shadow-lg sm:flex'>
                <input
                    className="flex h-full w-5/6 bg-tercero text-primero outline-none placeholder:text-primero"
                    type="text"
                    placeholder='Buscar'
                    value={context.busquedaProducto}
                    onChange={handleChange}
                />
                <span className='flex h-full w-1/6 items-center justify-center rounded-xl hover:cursor-pointer hover:bg-tercero'>
                    <img src={Lupa} alt="buscar" />
                </span>
            </div>
            <div className='mr-4 flex h-10 w-full items-center justify-center rounded-xl bg-tercero p-1 pl-4 shadow-xl sm:hidden sm:max-w-80 md:w-5/6'>
                <input
                    className="flex h-full w-5/6 bg-tercero text-primero outline-none placeholder:text-primero"
                    type="text"
                    placeholder='Buscar'
                    value={context.busquedaProducto}
                    onChange={handleChange}
                />
                <span className='flex h-full w-1/6 items-center justify-center rounded-xl hover:cursor-pointer hover:bg-segundo' >
                    <img className='h-6 w-4/5' src={Lupa} alt="Buscar" />
                </span>
            </div>
        </>
    );
}

export default Buscador;
