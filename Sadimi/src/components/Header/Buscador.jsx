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
            <div className='relative hidden h-12 w-full items-center rounded-xl border-2 border-quinto/20 sm:flex'>
                <input
                    id='buscador1'
                    className="flex h-full w-full rounded-xl bg-tercero pl-3 pr-12 text-primero placeholder:text-primero/60 focus:ring-0"
                    type="text"
                    placeholder='¿Qué producto buscamos?'
                    value={context.busquedaProducto}
                    onChange={handleChange}
                />
                <img className='absolute right-0 rounded-xl p-2' src={Lupa} alt="Buscar" />
            </div>

            <div className='flex h-12 w-full items-center justify-center rounded-xl border-2 border-quinto/20 p-1 pb-2 pl-4 sm:hidden sm:max-w-80 md:w-5/6'>
                <input
                    id='buscador2'
                    className="relative flex h-full w-full border-none bg-tercero pl-2 pr-12 text-primero outline-none placeholder:text-primero/60 focus:ring-0"
                    type="text"
                    placeholder='¿Qué producto buscamos?'
                    value={context.busquedaProducto}
                    onChange={handleChange}
                />
                <img className='absolute right-5 rounded-xl p-2' src={Lupa} alt="Buscar" />
            </div>
        </>
    );
}

export default Buscador;
