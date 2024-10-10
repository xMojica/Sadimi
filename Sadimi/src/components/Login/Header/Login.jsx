
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
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
        <main className='flex h-full w-full min-w-96 items-start justify-center bg-background md:items-center'>
            <section id='login' className='z-50 flex min-h-[80vh] w-full min-w-96 flex-col items-start justify-start rounded-xl md:w-1/2 md:min-w-[490px] md:max-w-[700px] md:p-8'>
                <header className='flex w-full min-w-96 items-center justify-between p-5 md:rounded-xl'>
                    <span className='h-8 w-8 md:h-10 md:w-10'>
                        <Atras titulo={titulo} setTitulo={setTitulo} />
                    </span>
                    <h1 className='mx-auto text-2xl font-bold text-primero md:text-3xl'>{titulo}</h1>
                    <span className='h-10 w-10'>
                        <Cerrar setTitulo={setTitulo} />
                    </span>
                </header>
                <div className='flex h-full min-h-[70vh] w-full min-w-96 flex-col justify-between gap-6 rounded-xl p-5'>
                    {(titulo == "Iniciar sesion") ? <IniciarSesion setTitulo={setTitulo} /> : null}
                    {(titulo == "Recuperar contraseña") ? <RecuperarContraseña setTitulo={setTitulo} /> : null}
                    {(titulo == "Datos personales") ? <DatosPersonales setTitulo={setTitulo} /> : null}
                    {(titulo == "Contacto") ? <Contacto setTitulo={setTitulo} /> : null}
                    {(titulo == "Ubicacion") ? <Ubicacion setTitulo={setTitulo} /> : null}
                    {(titulo == "Ingreso") ? <Ingreso setTitulo={setTitulo} /> : null}
                </div>

            </section >
        </main >
    );

}

export default Login;
