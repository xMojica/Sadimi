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
        <article className="flex h-96 w-40 flex-col justify-center overflow-hidden rounded-xl border-2 bg-tercero p-3 shadow-lg hover:cursor-pointer md:h-[28rem] md:w-60">
            <div className='flex h-36 w-full items-center justify-center md:h-52'>
                <img src={product.imagen} alt={product.nombre} width={200} className='aspect-square rounded-xl mix-blend-multiply shadow-md' />
            </div>
            <div className='mb-auto mt-2 flex max-h-36 min-h-24 flex-col md:my-2'>
                <h6 className='text-[0.7rem] text-primero'>{product.marca}</h6>
                <h1 className='text-md mb-2 text-quinto md:text-2xl'>{product.nombre}</h1>
            </div>
            <div className='mt-auto flex flex-row flex-nowrap gap-2'>
                {product.colores && product.colores.map((color, index) => (
                    <span key={index} className='flex items-center justify-center rounded-[50%] border border-primero p-1'>
                        <svg className='hover:scale-125' width="16px" height="16px" viewBox="0 0 16 16" fill={color} strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </span>
                ))}
            </div>
            <div className='mt-auto flex h-14 flex-row items-center justify-between'>
                <span className='flex flex-col'>
                    <h3 className='text-xl font-bold text-cuarto'>$ {product.precio_oferta}</h3>
                    <h4 className='text-md font-semibold text-quinto'><s>$ {product.valor}</s></h4>
                </span>
                <div className='flex h-10 w-1/3 items-center justify-center rounded-lg bg-primero text-right text-xl text-tercero shadow-md hover:-translate-y-1 hover:scale-105' onClick={agregarCarrito}>
                    <Carrito color={"#ececec"} />
                </div>
            </div>
        </article>
    );
}

export default Article;
