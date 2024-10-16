import React, { useContext, useCallback } from 'react';
import { Context } from '../../Context/main';
import Header from "../Header/Header"
import Footer from '../Footer/Footer';
import Atras from "../../assets/back.svg"
import { useNavigate } from 'react-router-dom';

function Cart() {
    const { cart, setCart, carrito, setCarrito } = useContext(Context);
    const navigate = useNavigate()
    const vaciarCarrito = useCallback(() => setCarrito([]), [setCarrito]);

    return (
        <>
            <Header />

            <header className='mt-40 flex w-full justify-center p-4 sm:mt-28'>
                <div className='rounded-[50%] hover:scale-110 hover:cursor-pointer hover:bg-segundo' onClick={() => { navigate("/") }}>
                    <img src={Atras} alt="atras" className='h-8 w-8' />
                </div>
                <h1 className='mx-auto text-xl font-bold text-primero sm:text-3xl'>Carrito de compras</h1>
            </header>
            <div className='flex flex-col justify-start gap-4 p-4 sm:flex-row sm:justify-center'>
                <section className='flex w-2/3 items-center justify-center rounded-xl border-2 border-gray-300 bg-tercero p-4 text-quinto shadow-lg'>
                    <h1 className='text-center text-2xl font-bold'>Esta seccion esta en desarrollo</h1>
                </section>
                <section className='flex w-1/3 flex-col gap-4 rounded-xl border-2 border-gray-300 bg-tercero p-4 text-quinto shadow-lg'>
                    <h1 className='items-center text-2xl font-bold'>Checkout</h1>
                    <hr />
                    <div className='inline-block items-center'>
                        <h4 className=''>Subtotal: <span className='float-end font-normal'>$3.999.900</span></h4>
                        <h4 className=''>Envio: <span className='float-end font-normal text-primero'>Gratis</span></h4>
                        <h4 className='mt-4 font-extrabold'>Total: <span className='float-end font-normal'>$3.999.900</span></h4>
                    </div>
                    <button className='rounded-xl bg-primero p-2 text-xl text-tercero'>Pagar</button>
                </section>

            </div>
            <Footer />
        </>
    );
}

export default Cart;
