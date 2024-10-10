import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../Context/main';
import { Alert } from '@mui/material';

function Paises({ setPais, disabled, handleChange }) {
    const { token, menuVisiblePaises, setMenuVisiblePaises, setMenuVisibleDepartamentos, setMenuVisibleCiudades } = useContext(Context);
    const [seleccionado, setSeleccionado] = useState(null);
    const [paises, setPaises] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [busqueda, setBusqueda] = useState("")
    useEffect(() => {
        const getCountries = async () => {

            try {
                const response = await axios.get('https://www.universal-tutorial.com/api/countries', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                    },
                });
                setPaises(response.data);
            } catch (error) {
                <Alert tipo={"Error"} mensaje={"Error al obtener los paises"} />
            } finally {
                setLoading(false);
            }
        };

        getCountries();
    }, [token]);

    const handleSelect = (pais) => {
        setSeleccionado(pais.country_name);
        setPais(pais.country_name);
        setMenuVisiblePaises(false);
        document.getElementById("paises").value = pais.country_name;

    };

    function visibilidad() {
        setMenuVisiblePaises(prev => !prev)
        setMenuVisibleDepartamentos(false)
        setMenuVisibleCiudades(false)
    }

    return (
        <div className="relative h-full w-full rounded-r-xl border-background">
            <input
                id='paises'
                className='h-full w-full rounded-r-xl bg-tercero px-4 text-left text-lg font-normal text-primero outline-none placeholder:text-primero'
                onClick={visibilidad}
                disabled={disabled}
                placeholder={"Paises:"}
                onChange={(e) => { setBusqueda(e.target.value); }}
            />
            <div className={`absolute z-10 mt-1 w-full rounded-r-xl border bg-segundo overflow-y-auto max-h-56 ${menuVisiblePaises ? 'block' : 'hidden'}`}>
                {paises.filter(pais =>
                    pais.country_name.toLowerCase().includes(busqueda.toLowerCase())
                ).map((pais) => (
                    <div
                        key={pais.country_short_name}
                        className='m-2 flex cursor-pointer items-center rounded-r-xl p-2 text-primero hover:bg-quinto hover:text-tercero'
                        name='pais'
                        onClick={() => { handleSelect(pais); handleChange(null, "pais", pais.country_name) }}
                    >
                        <span className='h-8 w-8'>
                            <img src={`https://flagsapi.com/${pais.country_short_name}/flat/64.png`} alt={pais.country_name} className="h-full w-full object-cover" />
                        </span>
                        <span className='ml-4'>{pais.country_name}</span>
                    </div>
                ))}
            </div>
        </div >
    );

};

export default Paises;
