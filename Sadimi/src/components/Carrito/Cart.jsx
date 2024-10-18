import React, { useContext, useCallback, useState, useEffect } from 'react';
import { Context } from '../../Context/main';
import Header from "../Header/Header"
import Footer from '../Footer/Footer';
import Atras from "../../assets/back.svg"
import Cerrar from '../../assets/close.svg'
import { useNavigate } from 'react-router-dom';


function Cart() {
    const { cart, setCart, carrito, setCarrito } = useContext(Context);
    const navigate = useNavigate()
    const [subtotal, setSubtotal] = useState(0)
    const [envio, setEnvio] = useState(0)
    const [total, setTotal] = useState(0)
    const vaciarCarrito = useCallback(() => setCarrito([]), [setCarrito]);
    const eliminarProducto = (product) => {
        console.log(product)
        setCarrito(carrito.filter(producto => producto._id !== product._id))
    }

    const manejarCantidad = (product, cambio) => {
        const nuevaCantidad = product.stock + cambio;
        if (nuevaCantidad >= 0 && nuevaCantidad <= product.cantidad) {
            setCarrito(prevCarrito => {
                return prevCarrito.map(item =>
                    item._id === product._id ? { ...item, stock: nuevaCantidad } : item
                );
            });
            console.log(carrito)
        };
    }

    useEffect(() => {
        const calcularTotal = () => {
            let subtotalNuevo = 0
            for (const product of carrito) {
                subtotalNuevo = subtotalNuevo + Math.floor(product.precio_oferta * product.stock)
            }
            setSubtotal(subtotalNuevo);
            parseInt(setTotal(subtotalNuevo + envio));

        }
        calcularTotal();
    }, [carrito])


    return (
        <>
            <Header />

            <div className='mt-36 flex w-full flex-col justify-start gap-4 p-4 sm:mt-28 sm:flex-row'>
                <section className='w-full gap-8 rounded-xl sm:w-2/3'>
                    {carrito.map((product) => (
                        <>
                            <article key={product._id} className='relative mb-2 flex flex-row items-center rounded-lg border-2 border-gray-300 bg-tercero p-2 text-quinto shadow-lg'>
                                <img src={product.imagen} alt={product.nombre} className='aspect-square h-12 mix-blend-multiply sm:h-24 lg:h-32' />
                                <div className='flex flex-col justify-center lg:gap-8'>
                                    <h1 className='text-sm font-bold text-quinto lg:text-xl xl:text-2xl'>{product.nombre}</h1>
                                    <h3 className='text-sm text-quinto lg:text-lg xl:text-xl' >$ {product.precio_oferta}</h3>
                                </div>
                                <div className='ml-auto mr-8 flex items-center gap-8'>
                                    <span className='flex max-w-max items-center gap-x-2 rounded-lg border-2 border-gray-300 p-2 text-sm shadow-lg lg:gap-x-4 lg:text-xl'>
                                        <button className='rounded-lg px-2' onClick={() => { manejarCantidad(product, -1) }}>-</button>
                                        <p className=''>{product.stock}</p>
                                        <button className='rounded-lg px-2' onClick={() => { manejarCantidad(product, 1) }}>+</button>
                                    </span>
                                    <button className='absolute right-0 top-0 rounded-[50%] p-1 text-tercero sm:p-2 lg:p-4' onClick={() => { eliminarProducto(product) }}>
                                        <img src={Cerrar} alt="cerrar" className='h-4 w-4 lg:h-6 lg:w-6' />
                                    </button>
                                </div>
                            </article>
                        </>
                    ))}

                </section>
                <section className='flex max-h-max w-full flex-col gap-4 rounded-xl border-2 border-gray-300 bg-tercero p-4 text-quinto shadow-lg sm:w-1/3'>
                    <h1 className='items-center text-sm font-bold lg:text-xl'>Checkout</h1>
                    <hr />
                    <div className='inline-block items-center'>
                        <h4 className='text-sm lg:text-lg'>Subtotal: <span className='float-end font-normal'>$ {subtotal}</span></h4>
                        <h4 className='text-sm lg:text-lg'>Envio: <span className='float-end font-normal text-primero'>Gratis</span></h4>
                        <h4 className='mt-4 text-sm font-extrabold lg:text-lg'>Total: <span className='float-end font-normal'>$ {total}</span></h4>
                    </div>
                    <button className='rounded-xl bg-primero p-2 text-xl text-tercero hover:scale-105'>Pagar</button>
                </section>

            </div>
            <Footer />
        </>
    );
}

export default Cart;
