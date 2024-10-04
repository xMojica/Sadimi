
import React, { useContext, useState } from 'react';
import { Context } from '../../../Context/main';
import Atras from './Atras';
import Cerrar from './Cerrar';
import IniciarSesion from '../IniciarSesion/IniciarSesion';
import DatosPersonales from '../Registrarse/DatosPersonales';
import Ubicacion from '../Registrarse/Ubicacion'
import Contacto from '../Registrarse/Contacto'
import Ingreso from '../Registrarse/Ingreso'
import RecuperarContraseña from '../Recuperar/RecuperarContraseña';

function Login() {
    const [titulo, setTitulo] = useState("Iniciar sesion")

    return (
        <section id='login' className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center border border-quinto/15 bg-black/40 shadow-md backdrop-blur-sm'>
            <div className='h-full w-full bg-background md:my-4 md:h-auto md:max-h-screen md:w-1/2 md:min-w-[490px] md:max-w-[700px] md:rounded-xl'>
                <header id='header-login' className='flex w-full items-center justify-between p-5'>
                    <span className='h-8 w-8 md:h-10 md:w-10'>
                        <Atras titulo={titulo} setTitulo={setTitulo} />
                    </span>
                    <h1 className='mx-auto text-xl font-bold text-primero sm:text-3xl'>{titulo}</h1>
                    <span className='h-10 w-10'>
                        <Cerrar setTitulo={setTitulo} />
                    </span>
                </header>
                {(titulo == "Iniciar sesion") ? <IniciarSesion setTitulo={setTitulo} /> : null}
                {(titulo == "Recuperar contraseña") ? <RecuperarContraseña setTitulo={setTitulo} /> : null}
                {(titulo == "Datos personales") ? <DatosPersonales setTitulo={setTitulo} /> : null}
                {(titulo == "Contacto") ? <Contacto setTitulo={setTitulo} /> : null}
                {(titulo == "Ubicacion") ? <Ubicacion setTitulo={setTitulo} /> : null}
                {(titulo == "Ingreso") ? <Ingreso setTitulo={setTitulo} /> : null}
            </div>
        </section >
    );

}

export default Login;
