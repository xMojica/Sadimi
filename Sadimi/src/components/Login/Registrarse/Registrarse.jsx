import React from 'react'
import { Outlet } from 'react-router-dom';

function Registrarse() {
    return (
        <main className='flex items-start justify-center w-full h-full sm:items-center'>
            <section id='login' className='z-50 flex h-[100svh] w-full flex-col items-center justify-start rounded-xl p-8 shadow-xl sm:h-full sm:min-h-[520px] sm:w-2/3 md:w-1/2'>
                <header className='flex items-center justify-between w-full'>
                    <span className='w-8 h-8'>
                        <Atras titulo={titulo} setTitulo={setTitulo} />
                    </span>
                    <h1 className='mx-auto text-xl font-bold text-primero xl:text-4xl'>{titulo}</h1>
                    <span className='w-8 h-8'>
                        <Cerrar setTitulo={setTitulo} />
                    </span>
                </header>
                <div className='flex w-full h-full mt-16 rounded-xl'>
                    <Outlet />
                </div>
            </section >
        </main >


    )
}

export default Registrarse