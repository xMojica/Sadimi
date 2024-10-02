import Carrito from '../Header/IconoCarrito'
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../Context/main';
import Loader from './Loader';

function Home() {
    const context = useContext(Context);
    const [products, setProducts] = useState([]);
    let productosFiltrados = []

    function handleClick() {
        context.setContador(context.contador + 1)
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://api-sadimi-v2.vercel.app/products');
                setProducts(response.data);
            } catch (err) {
                console.log('Error al obtener los productos', err);
            } finally {
                console.log("Obtencion de datos finalizada")
            }
        };
        fetchProducts();
    }, []);

    // Muestra la barra de carga antes de traer los datos del GET
    if (products.length !== 0) {
        productosFiltrados = products.filter(product =>
            product.nombre.toLowerCase().includes(context.busqueda.toLowerCase())
        );
    } else {
        return (
            <Loader />)
    }

    if (productosFiltrados.length === 0) {
        return (
            <>
                <main className='my-20 flex w-full min-w-96 flex-wrap items-start justify-center gap-4 px-2 sm:px-4 md:items-center'>
                    <h1 className='text-center text-xl text-primero md:text-3xl'>No existe ningún producto que coincida con la búsqueda.</h1>
                </main>
            </>
        )
    }

    return (
        <main className='my-20 flex w-full min-w-96 flex-wrap items-center justify-center gap-4 px-2 sm:px-4'>
            {productosFiltrados.map(product => (
                <article key={product._id} className="flex h-96 w-40 flex-col justify-center overflow-hidden rounded-xl border-2 bg-tercero p-3 shadow-lg hover:cursor-pointer md:h-[28rem] md:w-60">
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
                        <div className='flex h-10 w-1/3 items-center justify-center rounded-lg bg-primero text-right text-xl text-tercero shadow-md hover:-translate-y-1 hover:scale-105' onClick={handleClick}>
                            <Carrito color={"#ececec"} />
                        </div>
                    </div>
                </article>
            ))}
        </main >

    )

}

export default Home