import React, { useContext } from 'react';
import Carrito from '../Header/IconoCarrito';
import { Context } from '../../Context/main';

function Article({ product }) {

    const context = useContext(Context);

    function agregarCarrito() {
        context.setContadorCarrito(prevCount => prevCount + 1);
        context.setCarrito(prevCarrito => [...prevCarrito, product]);
    }



    return (
        <article className="flex h-96 w-40 flex-col justify-center overflow-hidden rounded-xl border-2 bg-tercero p-3 shadow-md hover:cursor-pointer hover:shadow-2xl sm:h-[480px] sm:w-60">
            <div className='relative flex h-32 w-full items-center justify-center sm:h-52'>
                <img src={product.imagen} alt={product.nombre} width={200} className='z-40 aspect-square w-52 rounded-xl mix-blend-multiply' />
                <div className='absolute left-0 top-0 z-40 w-14 justify-center rounded-lg bg-cuarto px-1 text-center text-sm font-bold text-tercero'>-30%</div>
            </div>
            <div className='flex flex-col md:my-2'>
                <h6 className='text-sm text-primero'>{product.marca}</h6>
                <h1 className='text-sm text-quinto md:text-xl'>{product.nombre}</h1>
            </div>
            <div className='mt-auto'>
                <div className="flex items-center gap-x-1">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-xl ${i < 4 ? 'text-yellow-500' : 'text-gray-300'}`}>
                            {i < 4 ? '★' : '☆'}
                        </span>
                    ))}
                    <h6 className='hidden text-[12px] text-quinto md:flex'>4.3 (54)</h6>
                </div>
            </div>

            <div className='my-1 flex flex-row flex-nowrap gap-2'>
                {product.colores && product.colores.map((color, index) => (
                    <span key={index} className='flex items-center justify-center rounded-[50%] border-2 border-quinto p-1'>
                        <svg className='hover:scale-150' width="16px" height="16px" viewBox="0 0 16 16" fill={color} strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </span>
                ))}
            </div>
            <div className='my-1 text-[11px] text-quinto md:text-sm'>
                {product.cantidad > 15 ? "+15 unidades disponibles" : product.cantidad + " unidades disponibles"}
            </div>

            <div className='text-md mt-4 flex h-8 items-center justify-center rounded-xl bg-primero px-4 text-center font-bold text-tercero shadow-lg hover:scale-105 hover:shadow-xl' onClick={agregarCarrito}>Agregar</div>

        </article>
    );
}

export default Article;
