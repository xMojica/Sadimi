
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Context } from '../../../Context/main';
import Atras from './Atras';
import Cerrar from './Cerrar';
import vector from './../../../assets/vector4.jpg'
import IniciarSesion from '../IniciarSesion/IniciarSesion';
import DatosPersonales from '../Registrarse/DatosPersonales';
import Ubicacion from '../Registrarse/Ubicacion'
import Contacto from '../Registrarse/Contacto'
import Ingreso from '../Registrarse/Ingreso'
import RecuperarContraseña from '../Recuperar/RecuperarContraseña';


function Login() {
    const [titulo, setTitulo] = useState("Iniciar sesion")
    const { setToken } = useContext(Context);

    useEffect(() => {
        sessionStorage.clear();
        const getAuthToken = async () => {
            try {
                const response = await axios.get('https://www.universal-tutorial.com/api/getaccesstoken', {
                    headers: {
                        'Accept': 'application/json',
                        'api-token': 'UFmpvLEJ9QRDMITEp3kglEJZiqmdVa_tV7Um3sKtkLctyU5NKZ70rhDEjpMc7uYZJRA',
                        'user-email': 'samojica08@hotmail.com'
                    }
                });
                setToken(response.data.auth_token)
                return response.data.auth_token;
            } catch (error) {
                throw new Error(`Error getting auth token: ${error.message}`);
            }
        };
        getAuthToken()
    }, [])

    return (

        <main className='flex h-full w-full items-start justify-center sm:items-center'>

            <section id='login' className='z-50 flex h-[100svh] w-full flex-col items-center justify-start rounded-xl p-8 shadow-xl sm:h-full sm:min-h-[520px] sm:w-2/3 md:w-1/2'>
                <header className='flex w-full items-center justify-between'>
                    <span className='h-8 w-8'>
                        <Atras titulo={titulo} setTitulo={setTitulo} />
                    </span>
                    <h1 className='mx-auto text-xl font-bold text-primero xl:text-4xl'>{titulo}</h1>
                    <span className='h-8 w-8'>
                        <Cerrar setTitulo={setTitulo} />
                    </span>
                </header>
                <div className='mt-16 flex h-full w-full rounded-xl'>
                    {(titulo == "Iniciar sesion") ? <IniciarSesion setTitulo={setTitulo} /> : null}
                    {(titulo == "Recuperar contraseña") ? <RecuperarContraseña setTitulo={setTitulo} /> : null}
                    {(titulo == "Datos personales") ? <DatosPersonales setTitulo={setTitulo} /> : null}
                    {(titulo == "Contacto") ? <Contacto setTitulo={setTitulo} /> : null}
                    {(titulo == "Ubicacion") ? <Ubicacion setTitulo={setTitulo} /> : null}
                    {(titulo == "Contraseña") ? <Ingreso setTitulo={setTitulo} /> : null}
                </div>
            </section >
            <img src={vector} alt="vector" className='hidden rounded-xl mix-blend-multiply md:flex md:w-80 xl:w-[420px]' />
        </main >

    );

}

export default Login;
