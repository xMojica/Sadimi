import React, { useContext, useState } from 'react'
import { Context } from '../../../Context/main';
import { useNavigate } from 'react-router-dom';
import Alerta from '../../Alerts/Alerta';
import IconoPais from '../../../assets/pais.svg'
import IconoDepartamento from '../../../assets/departamento.svg'
import IconoCiudad from '../../../assets/ciudad.svg'
import IconoDireccion from '../../../assets/direccion.svg'
import Paises from './Paises';
import Departamentos from './Departamentos';
import Ciudades from './Ciudades';

function Ubicacion({ setTitulo }) {
    const navigate = useNavigate();
    const { setOpen, mensaje, registro, setRegistro, setMensaje } = useContext(Context);
    const [pais, setPais] = useState('colombia');
    const [departamento, setDepartamento] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [descripcion, setDescripcion] = useState("")
    const [direccion, setDireccion] = useState({})
    const descripcionRegex = /^(?:[A-Za-z]+)\s\d{1,3}(\s#\s\d+[a-zA-Z]?-?\d+([a-zA-Z]?)?)?$/



    function handleChange(e, tipo, valor) {
        if (e === null) {
            setDireccion((prevDireccion) => ({
                ...prevDireccion,
                [tipo]: valor,
            }));
        } else {
            const { value } = e.target;
            setDescripcion(value);
        }
        setOpen(false);
    }

    function validaciones() {
        console.log(departamento, ciudad, descripcion)
        if (departamento === "") {
            setMensaje("Selecciona un departamento");
            setOpen(true)
            return false;
        }
        if (ciudad === "") {
            setMensaje("Selecciona una ciudad");
            setOpen(true)
            return false;
        }
        if (!descripcionRegex.test(descripcion)) {
            setMensaje("Escribe la descripción correctamente");
            setOpen(true)
            return false;
        }
        setOpen(false)
        return true
    }


    function siguiente() {

        if (validaciones()) {
            setRegistro((prevRegistro) => ({
                ...prevRegistro,
                direcciones: [direccion]
            }));
            navigate("Contraseña")
        }

    }

    return (
        <div className='flex flex-col w-full h-full gap-4'>

            <div className='w-full mx-auto max-w-96'>
                <Alerta tipo="Error" mensaje={mensaje} />
            </div>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex flex-row items-center w-full shadow-lg max-w-96 rounded-xl bg-tercero'>
                    <img className='absolute left-0 w-6 h-6 mx-4' src={IconoDepartamento} alt="Departamento" />
                    <Departamentos
                        setDepartamento={setDepartamento}
                        pais={"colombia"}
                        disabled={false}
                        handleChange={handleChange}
                    />
                </span>
            </div>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex flex-row items-center w-full shadow-lg max-w-96 rounded-xl bg-tercero'>
                    <img className='absolute left-0 w-6 h-6 mx-4' src={IconoCiudad} alt="Ciudad" />
                    <Ciudades
                        setCiudad={setCiudad}
                        departamento={departamento}
                        pais={pais}
                        disabled={departamento == null}
                        handleChange={handleChange}
                    />
                </span>
            </div>

            <div className='flex items-center justify-center rounded-xl'>
                <span className='relative flex flex-row items-center w-full shadow-lg max-w-96 rounded-xl bg-tercero'>
                    <input
                        className='w-full pl-4 pr-12 text-xl border border-gray-200 outline-none h-14 rounded-xl bg-tercero text-primero placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                        type="text"
                        value={registro.direccion}
                        name='descripcion'
                        placeholder='Descripción:'
                        onChange={handleChange}
                    />
                    <img className='absolute right-0 w-6 h-6 mx-4' src={IconoDireccion} alt="Descripcion" />
                </span>
            </div>

            <span className='flex flex-col items-center justify-center w-full mx-auto mt-8 max-w-96'>
                <button
                    className='w-full p-4 text-xl font-bold rounded-xl bg-primero text-tercero hover:scale-105 hover:cursor-pointer'
                    onClick={siguiente}>
                    Siguiente
                </button>
            </span>
        </div>
    );

}

export default Ubicacion