import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context/main';
import Close from "../../assets/close.svg"
import Vaciar from "../../assets/vaciar.svg"

function Cart() {
    const { cart, setCart, carrito, setCarrito } = useContext(Context);
    const mostrarCarrito = cart ? "flex" : "hidden";
    const main = document.querySelector('main');
    const subtotal = carrito.reduce((acc, p) => acc + p.precio_oferta, 0);
    const envio = carrito.lenght >= 1 ? 11000 : 0;
    const total = subtotal + envio;


    useEffect(() => {
        function ordenarCarrito() {
            const carritoReal = carrito.reduce((acc, item) => {
                const encontrado = acc.find(p => p._id === item._id);
                if (encontrado) {
                    encontrado.cantidad += 1;
                } else {
                    acc.push({ ...item });
                }
                return acc;
            }, []);
            setCarrito(carritoReal)
        }
        ordenarCarrito()
    }, [carrito])



    if (cart) {
        main.style.opacity = "0.1";
        main.style.pointerEvents = "none";
    } else {
        main.style.opacity = "1";
        main.style.pointerEvents = "auto";
    }

    function cerrar() {
        main.style.opacity = "1";
        main.style.pointerEvents = "auto";
        setCart(!cart)
    }

    function vaciarCarrito() {
        setCarrito([])
    }


    return (
        <aside className={`${mostrarCarrito} flex-col gap-4 p-4 fixed right-0 top-24 rounded-l-xl z-40 h-[620px] w-1/3 bg-tercero shadow-xl`}>
            <div className='flex w-full flex-row items-center justify-center rounded-xl p-4'>
                <div className='absolute left-8 rounded-[50%] hover:scale-110 hover:cursor-pointer hover:bg-segundo' onClick={vaciarCarrito}>
                    <img src={Vaciar} alt="Vaciar carrito" />
                </div>
                <h1 className='mx-auto text-xl font-bold text-primero'>Carrito de compras</h1>
                <div className='absolute right-8 rounded-[50%] hover:scale-110 hover:cursor-pointer hover:bg-segundo' onClick={cerrar}>
                    <img src={Close} alt="cerrar" />
                </div>
            </div>
            <div className='flex flex-col gap-4 overflow-y-auto rounded-xl'>
                {
                    <table className='min-w-full rounded-xl shadow-lg'>
                        <thead>
                            <tr className='bg-quinto'>
                                <th className='p-4 text-center text-tercero'>Imagen</th>
                                <th className='p-4 text-left text-tercero'>Producto</th>
                                <th className='p-4 text-center text-tercero'>Cantidad</th>
                                <th className='p-4 text-left text-tercero'>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carrito.map(p => (
                                    <tr key={p._id} className='border-b'>
                                        <td className='p-4'>
                                            <img src={p.imagen} width={60} alt="producto" className='aspect-square rounded-xl mix-blend-multiply' />
                                        </td>
                                        <td className='p-4 text-quinto'>{p.nombre}</td>
                                        <td className='p-4'>
                                            <div className='flex flex-row items-center'>
                                                <button className='rounded-xl bg-quinto px-2 text-xl text-tercero' onClick={(e) => { p.cantidad -= 1 }}>-</button>
                                                <h1 className='mx-2'>{p.cantidad}</h1>
                                                <button className='rounded-xl bg-quinto px-2 text-xl text-tercero' onClick={(e) => { p.cantidad += 1 }}>+</button>
                                            </div>
                                        </td>
                                        <td className='p-4'>{p.precio_oferta}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                }
            </div>
            <div className='mt-auto flex w-full flex-col items-start justify-center rounded-xl bg-gray-300 p-4'>
                <h3 className='flex w-full justify-between text-quinto'><span className='text-md'>Subtotal:</span><span>${subtotal}</span> </h3>
                <h3 className='flex w-full justify-between text-quinto'><span className='text-md'>Envio:</span><span>${envio}</span> </h3>
                <h3 className='flex w-full justify-between font-bold text-quinto'><span className='text-xl'>Total:</span><span>${total}</span> </h3>
            </div>
            <div className='flex w-full items-center justify-center'>

                <button className='w-1/3 rounded-xl bg-primero p-2 px-6 text-2xl text-tercero'>Comprar</button>
            </div>
        </aside>
    );
}

export default Cart;
