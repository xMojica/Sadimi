
import React, { useContext, useState } from 'react';
import { Context } from '../../../../Context/main';
import Atras from './Atras';
import Cerrar from './Cerrar';
import IniciarSesion from '../Main/IniciarSesion';
import DatosPersonales from '../Main/DatosPersonales';
import Ubicacion from '../Main/Ubicacion'
import Contacto from '../Main/Contacto'
import Ingreso from '../Main/Ingreso'

function Login() {
    const { mostrarLogin } = useContext(Context);
    const [titulo, setTitulo] = useState("Iniciar sesion")

    if (mostrarLogin == true) {
        return (
            <div id='login' className='fixed bottom-0 top-0 z-50 flex h-full w-full items-center justify-center border border-quinto/15 bg-black/40 shadow-md backdrop-blur-sm'>
                <div className='h-full w-full bg-background md:h-3/4 md:w-1/2 md:min-w-[490px] md:max-w-[700px] md:rounded-xl'>
                    <div id='header-login' className='flex w-full items-center justify-between p-5'>
                        <span className='h-8 w-8 md:h-10 md:w-10'>
                            <Atras titulo={titulo} setTitulo={setTitulo} />
                        </span>
                        <h1 className='mx-auto text-3xl text-primero'>{titulo}</h1>
                        <span className='h-10 w-10'>
                            <Cerrar />
                        </span>
                    </div>
                    {(titulo == "Iniciar sesion") ? <IniciarSesion setTitulo={setTitulo} /> : null}
                    {(titulo == "Datos personales") ? <DatosPersonales setTitulo={setTitulo} /> : null}
                    {(titulo == "Contacto") ? <Contacto setTitulo={setTitulo} /> : null}
                    {(titulo == "Ubicacion") ? <Ubicacion setTitulo={setTitulo} /> : null}
                    {(titulo == "Ingreso") ? <Ingreso setTitulo={setTitulo} /> : null}
                </div>
            </div>
        );
    } else {
        return null;
    }



}

export default Login;