import React, { useContext, useState } from 'react'
import Email from '../../../assets/email.svg'
import Documento from '../../../assets/documento.svg'
import Alerta from '../../Alerts/Alerta';
import { Context } from '../../../Context/main';

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
                const response = await axios.post('https://api-sadimi-v2.vercel.app/users/reset', { documento: documento, email: email });
                setMensaje(response.data.message);
                setTipo(response.data.status);
                setOpen(true);
            } catch (err) {
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
        <div className='flex h-full w-full flex-col gap-4'>

            <span className='mx-auto w-full max-w-96'>
                <Alerta tipo={tipo} mensaje={mensaje} />
            </span>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <img className='absolute right-0 mx-4 h-6 w-6' src={Email} alt="Email" />
                    <input
                        className='h-14 w-full rounded-xl border border-gray-200 pl-4 pr-12 text-xl text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                        type="email"
                        placeholder='Email:'
                        onChange={((e) => { handleChangeEmail(e) })}
                    />
                </span>
            </div>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex w-full max-w-96 flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <img className='absolute right-0 mx-4 h-6 w-6' src={Documento} alt="Documento" />
                    <input
                        className='h-14 w-full rounded-xl border border-gray-200 pl-4 pr-12 text-xl text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                        type="text"
                        placeholder='Documento:'
                        onChange={((e) => { handleChangeDocumento(e) })}
                    />
                </span>
            </div>

            <span className='mx-auto mt-4 flex w-full max-w-96 flex-col items-center justify-between'>
                <button
                    className='w-full rounded-xl bg-primero p-4 text-xl font-bold text-tercero hover:scale-105 hover:cursor-pointer'
                    onClick={recuperar}>
                    Recuperar
                </button>
            </span>
        </div>
    );

}

export default RecuperarContraseña