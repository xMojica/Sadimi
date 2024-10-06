import React, { useState } from 'react';

const paises = [
    { value: 'colombia', nombre: 'Colombia' },
    { value: 'peru', nombre: 'Perú' },
    { value: 'argentina', nombre: 'Argentina' },
    { value: 'mexico', nombre: 'México' },
];

const Paises = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const handleSelect = (pais) => {
        console.log(`Seleccionaste: ${pais.nombre}`);
        setMenuVisible(false);
    };

    return (
        <div className="relative h-full w-full rounded-r-xl border-l-8 border-background">
            <button
                className='h-full w-full bg-tercero px-4 text-left text-lg font-normal text-primero outline-none hover:cursor-pointer'
                onClick={() => setMenuVisible(prev => !prev)}
            >
                Pais:
            </button>
            <div className={`absolute z-10 mt-1 w-full rounded-r-xl border bg-segundo ${menuVisible ? 'block' : 'hidden'}`}>
                {paises.map((pais) => (
                    <div
                        key={pais.value}
                        className='m-2 flex cursor-pointer rounded-r-xl p-2 text-primero hover:cursor-pointer hover:bg-quinto hover:text-tercero'
                        onClick={() => handleSelect(pais)}
                    >
                        <span className='w-4 bg-white'></span>
                        <span>{pais.nombre}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Paises;
