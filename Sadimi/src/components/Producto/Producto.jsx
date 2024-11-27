import React, { useContext, useState } from 'react';

import Atras from './../Login/Header/Atras';
import { Context } from '../../Context/main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import IconoCarrito from "../../assets/agregarCarrito.svg"
import { useLocation } from 'react-router-dom';

function Producto() {
    const { carrito, setCarrito } = useContext(Context);
    const [contador, setContador] = useState(1)
    const product = useLocation().state;

    function agregarCarrito() {

        setCarrito(prevCarrito => {
            const productoExistente = prevCarrito.find(item => item._id === product._id);
            if (productoExistente) {
                return prevCarrito.map(item =>
                    item._id === product._id ? { ...item, cantidad: item.cantidad + contador } : item
                );
            } else {
                return [...prevCarrito, { ...product, cantidad: contador }];
            }
        });
    }

    function manejarContador(cantidad) {
        if ((contador != 0 || cantidad != -1) && contador < product.stock) {
            setContador(contador + cantidad)
        }
    }

    return (
        <>
            <Header />
            <main className='p-4 mt-2'>
                <span className='flex absolute ml-4 z-[54]'>
                    <Atras />
                </span>
                <article className='flex flex-col p-4 shadow-xl rounded-xl '>
                    <section className="flex justify-center flex-grow object-contain">
                        <img className='mix-blend-multiply h-96 min-w-96' src={product.imagen} alt={product.nombre} />
                    </section>
                    <section className='flex flex-wrap justify-between p-4 mt-4'>
                        <div className='w-full xl:w-3/5'>
                            <h6 className='text-sm text-quinto '>{product.marca}</h6>
                            <h1 className='text-2xl font-bold text-quinto sm:text-3xl'>{product.nombre}</h1>
                            <p className='my-4 text-lg text-quinto'>{product.descripcion}</p>
                        </div>
                        <div className='flex flex-col justify-between w-full mt-8 xl:w-2/5 xl:mt-0 xl:flex-col sm:flex-row xl:justify-start xl:pl-8'>
                            <span className='relative flex flex-col justify-center '>
                                <span className='flex flex-row gap-x-2'>
                                    <h1 className='text-3xl font-bold text-cuarto text-start sm:text-start'>$ {product.precio_oferta}</h1>
                                    <h3 className='p-2 px-4 my-auto text-sm font-bold text-center rounded-md bg-cuarto text-tercero'>{product.descuento}</h3>
                                </span>
                                <h3 className='text-xl text-quinto text-start sm:text-start'><s>$ {product.valor}</s></h3>
                            </span>
                            <span className='flex gap-4 mt-4 sm:mt-0 xl:mt-4'>
                                <button className='p-4 border-2 border-gray-300 shadow-md rounded-xl text-tercero hover:shadow-xl hover:scale-105' onClick={agregarCarrito}><img src={IconoCarrito} alt="Agregar" className='w-12' /></button>
                                <button className='w-full px-12 py-5 text-xl font-bold shadow-lg rounded-xl bg-primero text-tercero hover:shadow-xl hover:scale-105 '>Comprar</button>
                            </span>
                        </div>
                    </section>
                </article>
            </main >
            <Footer />
        </>
    );
}

export default Producto;
