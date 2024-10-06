import React, { useContext, useState } from 'react'
import { Context } from '../../../Context/main';
import Alerta from '../../Alerts/Alerta';
import Pais from '../../../assets/pais.svg'
import Departamento from '../../../assets/departamento.svg'
import Ciudad from '../../../assets/ciudad.svg'
import Direccion from '../../../assets/direccion.svg'
import ReactFlagsSelect from "react-flags-select";
import Paises from './Paises';

function Ubicacion({ setTitulo }) {
    const { setOpen } = useContext(Context);
    const [pais, setPais] = useState('');
    const [registro, setRegistro] = useState(() => {
        const storedRegistro = sessionStorage.getItem('registro');
        return storedRegistro ? JSON.parse(storedRegistro) : { nombre: '', apellido: '', documento: '', telefono: '', email: '', pais: '', departamento: '', ciudad: '', direccion: '', contraseña: '' };
    });

    function handleChange(e) {
        setOpen(false);
        const { name, value } = e.target;
        setRegistro((prevRegistro) => ({
            ...prevRegistro, [name]: value
        }));
    }

    function siguiente() {
        sessionStorage.setItem('registro', JSON.stringify(registro));
        setTitulo("Ingreso")
    }

    return (
        <section className='flex h-auto flex-col justify-center gap-6 rounded-xl bg-background p-10'>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-6 w-6' src={Pais} alt="Pais" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    {/* <input className='bg-red h-full w-full rounded-r-xl border-l-8 border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type="text" value={registro.pais} name='pais' placeholder='Pais:' onChange={handleChange} /> */}
                    <Paises />
                </span>
            </div>
            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={Departamento} alt="Departamento" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='bg-red h-full w-full rounded-r-xl border-l-8 border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type="text" value={registro.departamento} name='departamento' placeholder='Departamento:' onChange={handleChange} />
                </span>
            </div>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={Ciudad} alt="Ciudad" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='bg-red h-full w-full rounded-r-xl border-l-8 border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type="text" value={registro.ciudad} name='ciudad' placeholder='Ciudad:' onChange={handleChange} />
                </span>
            </div>

            <div className='flex h-12 items-center rounded-xl bg-tercero'>
                <img className='mx-4 h-full w-6' src={Direccion} alt="Direccion" />
                <span className='flex h-12 w-full flex-row items-center rounded-xl bg-tercero shadow-lg'>
                    <input className='bg-red h-full w-full rounded-r-xl border-l-8 border-background bg-tercero pl-3 text-lg text-primero outline-none placeholder:text-primero' type="text" value={registro.direccion} name='direccion' placeholder='Direccion:' onChange={handleChange} />
                </span>
            </div>

            <div className='mt-4 flex h-12 w-full justify-center'>
                <Alerta tipo={"Error"} mensaje={"Debes ingresar los datos correctamente"} />
            </div>

            <span className='mt-8 flex w-full flex-col'>
                <button className='rounded-xl bg-primero p-4 text-2xl font-bold text-segundo hover:scale-105 hover:cursor-pointer' onClick={siguiente}>Siguiente</button>
            </span>

        </section>
    )
}

export default Ubicacion