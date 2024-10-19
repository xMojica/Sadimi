import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Producto() {
    const product = useLocation().state;

    return (
        <>
            <Header />
            <main className='mt-36 px-4 sm:mt-32'>
                <div className='flex-wrap flex items-start  justify-center  shadow-xl border border-gray-300 rounded-xl p-4'>
                    <section className='flex  max-h-min justify-center object-contain'>
                        <img className=' mix-blend-multiply h-96 min-w-96 ' src={product.imagen} alt={product.nombre} />
                    </section>
                    <section className='inline-block mx-auto'>
                        <h6 className='text-quinto text-sm'>{product.marca}</h6>
                        <h1 className='text-quinto text-2xl sm:text-3xl font-bold '>{product.nombre}</h1>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Producto