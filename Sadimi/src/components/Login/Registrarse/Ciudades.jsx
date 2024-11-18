import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../../Context/main';
import iconoCiudades from "../../../assets/ciudad.svg"
import axios from 'axios';

function Ciudades({ setCiudad, disabled, handleChange, departamento }) {
    const { token } = useContext(Context);
    const [seleccionado, setSeleccionado] = useState(null);
    const [menuVisible, setMenuVisible] = useState(false);
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
        if (departamento) { getStates() }
    }, [token, departamento]);

    const handleSelect = (ciudad) => {
        setSeleccionado(ciudad.city_name);
        setCiudad(ciudad.city_name)
        setMenuVisible(false);
        document.getElementById("ciudades").value = ciudad.city_name
    };

    const handleFocus = () => {
        setMenuVisible(true);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setMenuVisible(false);
        }, 100);
    };


    useEffect(() => {
        document.getElementById("ciudades").value = ""
    }, [departamento])

    return (
        <div className="relative flex h-full w-full items-center rounded-r-xl border-background">
            <img src={iconoCiudades} alt="departamento" className='absolute right-0 mx-4 h-6 w-6' />
            <input
                id='ciudades'
                className='h-14 w-full rounded-xl border bg-tercero border-gray-200 pl-4 pr-12 text-xl text-primero outline-none placeholder:text-primero/80 focus:ring-2 focus:ring-primero'
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={disabled}
                placeholder={"Ciudades:"}
                onChange={(e) => setBusqueda(e.target.value)}
                autoComplete="off"
            />
            <div className={`absolute top-16 z-10 mt-1 w-full rounded-xl border bg-gray-300 overflow-y-auto max-h-56 ${menuVisible ? 'block' : 'hidden'}`}>
                {ciudades.filter(ciudad =>
                    ciudad.city_name.toLowerCase().includes(busqueda.toLowerCase())
                ).map((ciudad) => (
                    <div
                        key={ciudad.city_name}
                        className='m-2 flex cursor-pointer items-center rounded-xl p-2 text-primero hover:bg-quinto hover:text-tercero'
                        name='ciudad'
                        onClick={() => {
                            handleSelect(ciudad);
                            handleChange(null, "ciudad", ciudad.city_name)
                        }}
                    >
                        <span className='ml-4'>{ciudad.city_name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Ciudades;