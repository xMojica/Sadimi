import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../../Context/main';
import axios from 'axios';

function Departamentos({ pais, setDepartamento }) {
    const { token, disabled, menuVisibleDepartamentos, setMenuVisibleDepartamentos, setMenuVisiblePaises, setMenuVisibleCiudades } = useContext(Context);
    const [menuVisible, setMenuVisible] = useState(false);
    const [seleccionado, setSeleccionado] = useState(null);
    const [departamentos, setDepartamentos] = useState([]);
    const [error, setError] = useState(null);

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
    };

    function visibilidad() {
        setMenuVisibleDepartamentos(prev => !prev)
        setMenuVisiblePaises(false)
        setMenuVisibleCiudades(false)
    }

    return (
        <div className="relative h-full w-full rounded-r-xl border-l-8 border-background">
            <button
                className='h-full w-full bg-tercero px-4 text-left text-lg font-normal text-primero outline-none hover:cursor-pointer'
                onClick={visibilidad}
                disabled={disabled}

            >
                {seleccionado || "Departamentos:"}
            </button>
            <div className={`absolute z-10 mt-1 w-full rounded-r-xl border bg-segundo overflow-y-auto max-h-56 ${menuVisibleDepartamentos ? 'block' : 'hidden'}`}>
                {
                    departamentos.length > 0 ? (
                        departamentos.map((departamento) => (
                            <div
                                key={departamento.state_name}
                                className='m-2 flex cursor-pointer items-center rounded-r-xl p-2 text-primero hover:bg-quinto hover:text-tercero'
                                onClick={() => handleSelect(departamento)}
                            >
                                <span className='ml-4'>{departamento.state_name}</span>
                            </div>
                        ))
                    ) : (
                        <div className="p-2 text-center">No se encontraron departamentos.</div>
                    )
                }
            </div>
        </div>
    );
}

export default Departamentos;
