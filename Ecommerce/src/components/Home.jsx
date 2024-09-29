import Carrito from './Carrito'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {

    const [products, setProducts] = useState([]);

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

    console.log(products)
    return (
        <main className='my-20 flex w-full flex-wrap items-center justify-center gap-4 px-2 sm:px-4'>
            {products.map(product => (
                <article key={product._id} className="h-80 w-40 justify-center overflow-hidden rounded-xl border-2 bg-tercero p-3 shadow-lg hover:cursor-pointer md:h-96 md:w-60">
                    <div className='flex h-36 w-full items-center justify-center md:h-52'>
                        <img src={product.imagen} alt={product.nombre} width={200} className='aspect-square rounded-xl shadow-md' />
                    </div>
                    <div className='mt-2 flex flex-col md:my-2'>
                        <h6 className='text-[0.7rem] text-primero'>{product.marca}</h6>
                        <h1 className='mb-4 whitespace-nowrap text-lg font-semibold text-quinto md:text-2xl'>{product.nombre}</h1>
                        <div className='flex flex-row flex-nowrap gap-3'>
                            {product.colores && product.colores.map((color, index) => (
                                <svg className='hover:scale-125' key={index} width="20px" height="20px" viewBox="0 0 16 16" fill={color} xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                            ))}

                        </div>
                    </div>
                    <div className='flex h-14 flex-row items-center justify-between'>
                        <span className='flex flex-col'>
                            <h3 className='text-xl font-bold text-cuarto'>$ {product.precio_oferta}</h3>
                            <h4 className='text-md font-semibold text-quinto'><s>$ {product.valor}</s></h4>
                        </span>
                        <div className='flex h-10 w-1/3 items-center justify-center rounded-lg bg-primero text-right text-xl text-tercero shadow-md hover:-translate-y-1 hover:scale-105'>
                            <Carrito client:load color={"#ececec"} />
                        </div>
                    </div>
                </article>
            ))
            }
        </main >
    )
}

export default Home