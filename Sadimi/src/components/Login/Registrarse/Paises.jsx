import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../Context/main';

function Paises({ setPais }) {
    const { token } = useContext(Context);
    const [menuVisible, setMenuVisible] = useState(false);
    const [seleccionado, setSeleccionado] = useState(null);
    const [paises, setPaises] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

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
                setError(`Error al obtener los países: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        getCountries();
    }, [token]);

    const handleSelect = (pais) => {
        setSeleccionado(pais.country_name);
        setPais(pais.country_name);
        setMenuVisible(false);
    };

    return (
        <div className="relative h-full w-full rounded-r-xl border-l-8 border-background">
            <button
                className='h-full w-full bg-tercero px-4 text-left text-lg font-normal text-primero outline-none hover:cursor-pointer'
                onClick={() => setMenuVisible(prev => !prev)}
            >
                {seleccionado || "Paises:"}
            </button>
            <div className={`absolute z-10 mt-1 w-full rounded-r-xl border bg-segundo overflow-y-auto max-h-56 ${menuVisible ? 'block' : 'hidden'}`}>
                {loading ? (
                    <div className="p-2 text-center">Cargando países ...</div>
                ) : error ? (
                    <div className="p-2 text-center text-red-500">{error}</div>
                ) : (
                    paises.map((pais) => (
                        <div
                            key={pais.country_short_name}
                            className='m-2 flex cursor-pointer items-center rounded-r-xl p-2 text-primero hover:bg-quinto hover:text-tercero'
                            onClick={() => handleSelect(pais)}
                        >
                            <span className='h-8 w-8'>
                                <img src={`https://flagsapi.com/${pais.country_short_name}/flat/64.png`} alt={pais.country_name} className="h-full w-full object-cover" />
                            </span>
                            <span className='ml-4'>{pais.country_name}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Paises;
