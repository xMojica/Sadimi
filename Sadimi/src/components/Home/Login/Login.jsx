
import React, { useContext } from 'react';
import Atras from './Atras';
import Cerrar from './Cerrar';
import { Context } from '../../../Context/main';

function Login() {

    const context = useContext(Context);

    if (context.mostrarLogin == true) {
        return (
            <div id='login' className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center border border-quinto/15 bg-black/40 shadow-md backdrop-blur-sm'>
                <div className='h-full w-full bg-tercero sm:w-1/2 md:h-3/4 md:w-3/4 md:rounded-xl'>
                    <div className='flex w-full items-center justify-between p-5'>
                        <span className='h-8 w-8 md:h-10 md:w-10'>
                            <Atras />
                        </span>
                        <h1 className='mx-auto text-xl text-primero md:text-3xl'>Login</h1>
                        <span className='h-8 w-8 md:h-10 md:w-10'>
                            <Cerrar />
                        </span>
                    </div>
                </div>

            </div>
        );
    } else {
        return null;
    }



}

export default Login;
