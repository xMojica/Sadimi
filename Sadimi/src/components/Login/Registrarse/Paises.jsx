import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

function Paises() {

    return (
        <div className="relative h-full w-full rounded-r-xl border-background">
            <div className={`absolute z-10 mt-1 block max-h-56 w-full overflow-y-auto rounded-r-xl border bg-segundo`}>
                <span className='h-8 w-8'>
                    <img src={`https://flagsapi.com/colombia/flat/64.png`} alt="bandera" className="h-full w-full object-cover" />
                </span>
                <span className='ml-4'>Colombia</span>
            </div>
        </div>

    );

};

export default Paises;
