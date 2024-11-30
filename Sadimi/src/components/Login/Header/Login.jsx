
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Context } from '../../../Context/main';
import Atras from './Atras';
import Cerrar from './Cerrar';



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

                </div>
            </section >
        </main >

    );

}

export default Login;
