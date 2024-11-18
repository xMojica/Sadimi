import React, { useState, useContext, useEffect } from 'react';
import iconoDepartamento from "../../../assets/departamento.svg"
import { Context } from '../../../Context/main';
import axios from 'axios';

function Departamentos({ setDepartamento, disabled, handleChange, pais }) {
    const { token } = useContext(Context);
    const [menuVisible, setMenuVisible] = useState(false);
    const [seleccionado, setSeleccionado] = useState(null);
    const [departamentos, setDepartamentos] = useState([]);
    const [error, setError] = useState(null);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        const getStates = async () => {
            try {
                const response = await axios.get(`https://www.universal-tutorial.com/api/states/${pais}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                    },
                });
                setDepartamentos(response.data);
            } catch (error) {
                setError(`Error al obtener departamentos: ${error.response ? error.response.data : error.message}`);
            }
        };

        getStates();
    }, [token, pais]);

    const handleSelect = (departamento) => {
        setSeleccionado(departamento.state_name);
        setDepartamento(departamento.state_name);
        setMenuVisible(false);
        document.getElementById("departamentos").value = departamento.state_name;
    };

    const handleFocus = () => {
        setMenuVisible(true);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setMenuVisible(false);
        }, 100);
    };

    return (
        <div className="relative flex h-full w-full items-center rounded-r-xl border-background">
            <img src={iconoDepartamento} alt="departamento" className='absolute right-0 mx-4 h-6 w-6' />
            <input
                id='departamentos'
                className='h-14 w-full rounded-xl border bg-tercero border-gray-200 pl-4 pr-12 text-xl text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                disabled={disabled}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={seleccionado || "Departamento:"}
                onChange={(e) => setBusqueda(e.target.value)}
                autoComplete="off"
            />
            <div className={`absolute top-16 z-10 mt-1 w-full rounded-xl border bg-gray-300 overflow-y-auto max-h-56 ${menuVisible ? 'block' : 'hidden'}`}>
                {departamentos.filter(departamento =>
                    departamento.state_name.toLowerCase().includes(busqueda.toLowerCase())
                ).map((departamento) => (
                    <div
                        key={departamento.state_name}
                        className='m-2 flex cursor-pointer items-center rounded-xl p-2 text-primero hover:bg-quinto hover:text-tercero'
                        onClick={() => { handleSelect(departamento); handleChange(null, "departamento", departamento.state_name); }}
                    >
                        <span className='ml-4'>{departamento.state_name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Departamentos;

