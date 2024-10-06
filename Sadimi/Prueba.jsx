// src/ApiComponent.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Prueba = () => {
    const [authToken, setAuthToken] = useState('');
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [error, setError] = useState('');

    // Función para obtener el token de autorización
    const getAuthToken = async () => {
        try {
            const response = await axios.get('https://www.universal-tutorial.com/api/getaccesstoken', {
                headers: {
                    'Accept': 'application/json',
                    'api-token': 'UFmpvLEJ9QRDMITEp3kglEJZiqmdVa_tV7Um3sKtkLctyU5NKZ70rhDEjpMc7uYZJRA',
                    'user-email': 'samojica08@hotmail.com',
                },
            });
            setAuthToken(response.data.auth_token);
        } catch (error) {
            setError(`Error getting auth token: ${error.message}`);
        }
    };

    // Función para obtener los países
    const getCountries = async () => {
        try {
            const response = await axios.get('https://www.universal-tutorial.com/api/countries', {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Accept': 'application/json',
                },
            });
            setCountries(response.data);
        } catch (error) {
            setError(`Error getting countries: ${error.message}`);
        }
    };

    // Función para obtener los estados de un país
    const getStates = async (countryName) => {
        try {
            const response = await axios.get(`https://www.universal-tutorial.com/api/states/${countryName}`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Accept': 'application/json',
                },
            });
            setStates(response.data);
        } catch (error) {
            setError(`Error getting states: ${error.message}`);
        }
    };

    // Función para obtener las ciudades de un estado
    const getCities = async (stateName) => {
        try {
            const response = await axios.get(`https://www.universal-tutorial.com/api/cities/${stateName}`, {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Accept': 'application/json',
                },
            });
            setCities(response.data);
        } catch (error) {
            setError(`Error getting cities: ${error.message}`);
        }
    };

    // useEffect para obtener el token y los países al montar el componente
    useEffect(() => {
        getAuthToken();
    }, []);

    useEffect(() => {
        if (authToken) {
            getCountries();
        }
    }, [authToken]);

    return (
        <div>
            <h1>Countries</h1>
            {error && <p>{error}</p>}
            <ul>
                {countries.map((country) => (
                    <button key={country.country_short_name} onClick={() => getStates(country.country_name)}>
                        {country.country_name}
                    </button>
                ))}
            </ul>

            <h2>States</h2>
            <ul>
                {states.map((state) => (
                    <button className='bg-violet-400' key={state.state_name} onClick={() => getCities(state.state_name)}>
                        {state.state_name}
                    </button>
                ))}
            </ul>

            <h2>Cities</h2>
            <ul>
                {cities.map((city) => (
                    <li key={city.city_name}>{city.city_name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Prueba;
