
import React from 'react';
import Back from './Back';
import Cerrar from './Cerrar';

function Registrarse() {

    return (
        <div id='register' className='fixed left-0 top-0 z-50 hidden h-full w-full items-center justify-center border border-quinto/15 bg-black/40 shadow-md backdrop-blur-sm'>
            <div className='h-3/4 w-3/4 rounded-xl bg-tercero sm:w-1/2'>
                <div className='flex w-full items-center justify-between p-5'>
                    <span className='h-8 w-8 md:h-10 md:w-10'>
                        <Back />
                    </span>
                    <h1 className='mx-auto text-xl text-primero md:text-3xl'>Datos personales</h1>
                    <span className='h-8 w-8 md:h-10 md:w-10'>
                        <Cerrar />
                    </span>
                </div>
            </div>

        </div>
    );
}

export default Registrarse;
