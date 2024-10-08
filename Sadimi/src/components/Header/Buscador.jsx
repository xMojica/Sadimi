import React, { useContext, useEffect, useState } from 'react';
import Lupa from './../../assets/lupa.svg';
import { Context } from '../../Context/main';

function Buscador() {
    const context = useContext(Context);

    function handleChange(e) {
        context.setBusqueda(e.target.value);
    }

    return (
        <>
            <div className='hidden h-10 w-80 max-w-80 items-center rounded-xl bg-tercero p-2 pl-4 shadow-md md:flex'>
                <input
                    className="flex h-full w-5/6 bg-tercero text-primero outline-none placeholder:text-primero"
                    type="text"
                    placeholder='Buscar'
                    value={context.busqueda}
                    onChange={handleChange}
                />
                <span className='flex h-full w-1/6 items-center justify-center rounded-xl hover:cursor-pointer hover:bg-segundo'>
                    <img src={Lupa} alt="buscar" />
                </span>
            </div>
            <div className='flex h-10 w-full items-center justify-center rounded-xl bg-tercero p-1 pl-4 shadow-md md:hidden md:w-5/6'>
                <input
                    className="flex h-full w-5/6 bg-tercero text-primero outline-none placeholder:text-primero"
                    type="text"
                    placeholder='Buscar'
                    value={context.busqueda}
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
