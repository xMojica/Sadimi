import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../../Context/main';
import axios from 'axios';

function Ciudades({ setCiudad, departamento, disabled }) {
    const { token, menuVisibleCiudades, setMenuVisibleCiudades, setMenuVisiblePaises, setMenuVisibleDepartamentos } = useContext(Context);
    const [menuVisible, setMenuVisible] = useState(false);
    const [seleccionado, setSeleccionado] = useState(null);
    const [ciudades, setCiudades] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getStates = async () => {
            try {
                const response = await axios.get(`https://www.universal-tutorial.com/api/cities/${departamento}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                    },
                });
                setCiudades(response.data);
            } catch (error) {
                setError(`Error al obtener departamentos: ${error.response ? error.response.data : error.message}`);
            }
        };

        getStates();
    }, [token, departamento]);

    const handleSelect = (ciudad) => {
        setSeleccionado(ciudad.city_name);
        setCiudad(ciudad.city_name)
        setMenuVisibleCiudades(false);
    };

    function visibilidad() {
        setMenuVisibleCiudades(prev => !prev)
        setMenuVisibleDepartamentos(false)
        setMenuVisiblePaises(false)
    }

    return (
        <div className="relative h-full w-full rounded-r-xl border-l-8 border-background">
            <button
                className='h-full w-full bg-tercero px-4 text-left text-lg font-normal text-primero outline-none hover:cursor-pointer'
                onClick={visibilidad}
                disabled={disabled}
            >
                {seleccionado || "Ciudades:"}
            </button>
            <div className={`absolute z-10 mt-1 w-full rounded-r-xl border bg-segundo overflow-y-auto max-h-56 ${menuVisibleCiudades ? 'block' : 'hidden'}`}>
                {
                    ciudades.length > 0 ? (
                        ciudades.map((ciudad) => (
                            <div
                                key={ciudad.city_name}
                                className='m-2 flex cursor-pointer items-center rounded-r-xl p-2 text-primero hover:bg-quinto hover:text-tercero'
                                onClick={() => handleSelect(ciudad)}
                            >
                                <span className='ml-4'>{ciudad.city_name}</span>
                            </div>
                        ))
                    ) : (
                        <div className="p-2 text-center">No se encontraron Ciudades.</div>
                    )
                }
            </div>
        </div>
    );
}

export default Ciudades