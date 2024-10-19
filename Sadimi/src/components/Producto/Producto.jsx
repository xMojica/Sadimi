import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AgregarCarrito from "../../assets/agregarCarrito.svg"

function Producto() {
    const product = useLocation().state;

    return (
        <>
            <Header />
            <main className='mt-36 p-4 sm:mt-32'>
                <div className='flex-wrap flex items-start justify-center shadow-xl border border-gray-300 rounded-xl p-4'>
                    <section className='flex justify-center object-contain flex-grow'>
                        <img className='mix-blend-multiply h-96 min-w-96' src={product.imagen} alt={product.nombre} />
                    </section>
                    <section className='mx-auto flex flex-col justify-start lg:flex-grow lg:min-h-[24rem]'>
                        <h6 className='text-quinto text-sm text-center lg:text-start'>{product.marca}</h6>
                        <h1 className='text-quinto text-2xl sm:text-3xl text-center lg:text-start font-bold'>{product.nombre}</h1>

                        <div className='mt-auto flex gap-4 justify-center lg:justify-end'>
                            <button className='p-4 rounded-xl border-2 border-gray-300 text-tercero shadow-lg'><img src={AgregarCarrito} alt="Agregar" /></button>
                            <button className='px-12 py-5 rounded-xl bg-primero shadow-lg text-tercero text-xl'>Comprar</button>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Producto;
