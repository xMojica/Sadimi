import React, { useContext, useState } from 'react'
import Email from '../../../assets/email.svg'
import Documento from '../../../assets/documento.svg'
import Alerta from '../../Alerts/Alerta';
import { Context } from '../../../Context/main';
import axios from 'axios';
import Atras from './../Header/Atras';
import Cerrar from '../Header/Cerrar';

function RecuperarContraseña() {
    const [documento, setDocumento] = useState("")
    const [email, setEmail] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [tipo, setTipo] = useState("")
    const { setOpen } = useContext(Context)
    const documentoRegex = /^(?!0{4,12})\d{4,12}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    function handleChangeDocumento(e) {
        setDocumento(e.target.value)
        setOpen(false)
    }
    function handleChangeEmail(e) {
        setEmail(e.target.value)
        setOpen(false)
    }

    function validaciones() {
        if (!emailRegex.test(email)) {
            setMensaje("Escribe un email válido.");
            setOpen(true)
            return false;
        }
        if (!documentoRegex.test(documento)) {
            setMensaje("Escribe un documento válido.");
            setOpen(true)
            return false;
        }
        return true;
    }

    async function recuperar() {

        if (validaciones()) {
            try {
                const response = await axios.post('https://api-sadimi-v2.vercel.app/users/reset',
                    { documento: documento, email: email });
                setMensaje(response.data.message);
                setTipo(response.data.status);
                setOpen(true);
            } catch (err) {
                console.log(documento, email)
                if (err.response) {
                    setTipo(err.response.data.status);
                    setMensaje(err.response.data.message);
                    setOpen(true);
                } else {
                    setTipo("Error");
                    setMensaje("Error interno");
                    setOpen(true);
                }
            }
        }
    }


    return (
        <main className='flex items-start justify-center w-full h-full sm:items-center'>
            <section id='login' className='z-50 flex h-[100svh] w-full flex-col items-center justify-start rounded-xl p-8 shadow-xl sm:h-full sm:min-h-[520px] sm:w-2/3 md:w-1/2'>
                <header className='flex items-center justify-between w-full'>
                    <span className='w-8 h-8'>
                        <Atras />
                    </span>
                    <h1 className='mx-auto text-xl font-bold text-primero xl:text-4xl'>Recuperar Contraseña</h1>
                    <span className='w-8 h-8'>
                        <Cerrar />
                    </span>
                </header>
                <div className='flex w-full h-full mt-16 rounded-xl'>
                    <div className='flex flex-col w-full h-full gap-4'>

                        <span className='w-full mx-auto max-w-96'>
                            <Alerta tipo={tipo} mensaje={mensaje} />
                        </span>

                        <div className='flex items-center justify-center rounded-xl'>
                            <span className='relative flex flex-row items-center w-full shadow-lg max-w-96 rounded-xl bg-tercero'>
                                <img className='absolute right-0 w-6 h-6 mx-4' src={Email} alt="Email" />
                                <input
                                    className='w-full pl-4 pr-12 text-xl border border-gray-200 outline-none h-14 rounded-xl bg-tercero text-primero placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                                    type="email"
                                    placeholder='Email:'
                                    onChange={((e) => { handleChangeEmail(e) })}
                                />
                            </span>
                        </div>

                        <div className='flex items-center justify-center rounded-xl'>
                            <span className='relative flex flex-row items-center w-full shadow-lg max-w-96 rounded-xl bg-tercero'>
                                <img className='absolute right-0 w-6 h-6 mx-4' src={Documento} alt="Documento" />
                                <input
                                    className='w-full pl-4 pr-12 text-xl border border-gray-200 outline-none h-14 rounded-xl bg-tercero text-primero placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                                    type="text"
                                    placeholder='Documento:'
                                    onChange={((e) => { handleChangeDocumento(e) })}
                                />
                            </span>
                        </div>

                        <span className='flex flex-col items-center justify-between w-full mx-auto mt-4 max-w-96'>
                            <button
                                className='w-full p-4 text-xl font-bold rounded-xl bg-primero text-tercero hover:scale-105 hover:cursor-pointer'
                                onClick={recuperar}>
                                Recuperar
                            </button>
                        </span>
                    </div>
                </div>
            </section >
        </main >

    );

}

export default RecuperarContraseña