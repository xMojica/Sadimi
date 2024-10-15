import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../../Context/main';
import axios from 'axios';

function Departamentos({ setDepartamento, disabled, handleChange, pais }) {
    const { token, menuVisibleDepartamentos, setMenuVisibleDepartamentos, setMenuVisiblePaises, setMenuVisibleCiudades } = useContext(Context);
    const [menuVisible, setMenuVisible] = useState(false);
    const [seleccionado, setSeleccionado] = useState(null);
    const [departamentos, setDepartamentos] = useState([]);
    const [error, setError] = useState(null);
    const [busqueda, setBusqueda] = useState("")

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
        setMenuVisibleDepartamentos(false);
        document.getElementById("departamentos").value = departamento.state_name;
    };

    function visibilidad() {
        setMenuVisibleDepartamentos(prev => !prev)
        setMenuVisibleCiudades(false)
    }


    return (
        <div className="relative h-full w-full rounded-r-xl border-background">
            <input
                id='departamentos'
                className='text-md h-10 w-full rounded-xl border border-gray-200 pl-4 text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero sm:h-14 sm:text-xl'
                onClick={visibilidad}
                disabled={disabled}
                placeholder={"Departamento:"}
                onChange={(e) => setBusqueda(e.target.value)}
            />
            <div className={`absolute z-10 mt-1 w-full rounded-r-xl border bg-segundo overflow-y-auto max-h-56 ${menuVisibleDepartamentos ? 'block' : 'hidden'}`}>
                {departamentos.filter(departamento =>
                    departamento.state_name.toLowerCase().includes(busqueda.toLowerCase())
                ).map((departamento) => (
                    <div
                        key={departamento.state_name}
                        className='m-2 flex cursor-pointer items-center rounded-r-xl p-2 text-primero hover:bg-quinto hover:text-tercero'
                        name="departamento"
                        onClick={() => { handleSelect(departamento); handleChange(null, "departamento", departamento.state_name) }}
                    >
                        <span className='ml-4'>{departamento.state_name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Departamentos;
