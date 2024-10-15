import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../../Context/main';
import axios from 'axios';

function Ciudades({ setCiudad, disabled, handleChange, departamento }) {
    const { token, menuVisibleCiudades, setMenuVisibleCiudades, setMenuVisibleDepartamentos } = useContext(Context);
    const [seleccionado, setSeleccionado] = useState(null);
    const [ciudades, setCiudades] = useState([]);
    const [error, setError] = useState(null);
    const [busqueda, setBusqueda] = useState("");

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
        document.getElementById("ciudades").value = ciudad.city_name
    };

    function visibilidad() {
        setMenuVisibleCiudades(prev => !prev)
        setMenuVisibleDepartamentos(false)
    }

    useEffect(() => {
        document.getElementById("ciudades").value = ""
    }, [departamento])

    return (
        <div className="relative h-full w-full rounded-r-xl border-background">
            <input
                id='ciudades'
                className='text-md h-10 w-full rounded-xl border border-gray-200 pl-4 text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero sm:h-14 sm:text-xl'
                onClick={visibilidad}
                disabled={disabled}
                placeholder={"Ciudades:"}
                onChange={(e) => setBusqueda(e.target.value)}
            />
            <div className={`absolute z-10 mt-1 w-full rounded-r-xl border bg-segundo overflow-y-auto max-h-56 ${menuVisibleCiudades ? 'block' : 'hidden'}`}>
                {ciudades.filter(ciudad =>
                    ciudad.city_name.toLowerCase().includes(busqueda.toLowerCase())
                ).map((ciudad) => (
                    <div
                        key={ciudad.city_name}
                        className='m-2 flex cursor-pointer items-center rounded-r-xl p-2 text-primero hover:bg-quinto hover:text-tercero'
                        name='ciudad'
                        onClick={() => { handleSelect(ciudad); handleChange(null, "ciudad", ciudad.city_name) }}
                    >
                        <span className='ml-4'>{ciudad.city_name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ciudades;