import React, { useContext, useEffect, useState, useCallback } from 'react';
import { Context } from '../../Context/main';
import Close from "../../assets/close.svg";
import Vaciar from "../../assets/vaciar.svg";
import Delete from "../../assets/delete.svg"

function Cart() {
    const { cart, setCart, carrito, setCarrito } = useContext(Context);
    const [subtotal, setSubtotal] = useState(0);
    const [envio, setEnvio] = useState(0);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        document.querySelector("main").style.opacity = cart ? "0.1" : "1";
        document.querySelector("main").style.pointerEvents = cart ? "none" : "auto";
        document.querySelector("html").style.overflowY = cart ? "hidden" : "auto";
        document.querySelector("aside").style.overflowY = cart ? "auto" : "hidden";
    }, [cart]);

    const cerrar = useCallback(() => {
        setCart(false);
    }, [setCart]);

    const vaciarCarrito = useCallback(() => {
        setCarrito([]);
    }, [setCarrito]);


    useEffect(() => {
        const nuevoSubtotal = carrito.reduce((acc, p) => acc + parseInt(p.precio_oferta * p.stock), 0);
        setSubtotal(nuevoSubtotal);
        const nuevoEnvio = nuevoSubtotal != 0 ? 10000 : 0
        setEnvio(nuevoEnvio);
        setTotal(nuevoSubtotal + nuevoEnvio);
    }, [carrito]);

    const actualizarCantidad = (id, increment) => {
        setCarrito(prevCarrito =>
            prevCarrito.map(item =>
                item._id === id
                    ? { ...item, stock: Math.max(item.stock + increment, 0) }
                    : item
            )
        );
    };

    function eliminar(id) {
        const index = carrito.findIndex(producto => producto._id === id);
        if (index !== -1) {
            carrito.splice(index, 1);
            setCarrito([...carrito]);
        }
    }

    return (
        <aside className={`flex flex-col gap-4 p-4 fixed right-0 top-0 sm:top-24 rounded-l-xl min-w-96 z-[52] sm:z-40 h-[100svh] sm:h-[84svh] md:h-[620px] w-full md:w-[620px] bg-tercero shadow-xl overflow-y-auto ${cart ? "flex" : "hidden"}`}>
            <div className='flex w-full flex-row items-center justify-center rounded-xl p-4'>
                <div className='absolute left-8 rounded-[50%] p-2 hover:scale-110 hover:cursor-pointer hover:bg-segundo' onClick={vaciarCarrito}>
                    <img src={Vaciar} alt="Vaciar carrito" className='w-8 sm:w-10' />
                </div>
                <h1 className='mx-auto text-lg font-bold text-primero sm:text-2xl'>Carrito de compras</h1>
                <div className='absolute right-8 rounded-[50%] p-2 hover:scale-110 hover:cursor-pointer hover:bg-segundo' onClick={cerrar}>
                    <img src={Close} alt="cerrar" className='w-8 sm:w-10' />
                </div>
            </div>
            <div className='flex h-full flex-col gap-4 overflow-y-auto rounded-xl'>
                {carrito.length == 0 ? (
                    <div className='mt-28 flex h-full items-start justify-center'>
                        <h1 className='text-md text-center font-bold text-quinto sm:text-2xl'>No hay productos en el carrito</h1>
                    </div>
                ) :
                    (
                        <>
                            <table className='min-w-full rounded-xl shadow-lg'>
                                <thead>
                                    <tr className='bg-gray-300'>
                                        <th className='p-1 text-center text-sm text-quinto sm:p-4'>Imagen</th>
                                        <th className='p-1 text-left text-sm text-quinto sm:p-4'>Producto</th>
                                        <th className='p-1 text-center text-sm text-quinto sm:p-4'>Cantidad</th>
                                        <th className='p-1 text-left text-sm text-quinto sm:p-4'>Precio</th>
                                        <th className='p-1 text-center text-sm text-quinto sm:p-4'>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carrito.map(p => (
                                        <tr key={p._id} className='bg-gray-200'>
                                            <td className='flex items-center justify-center sm:p-4'>
                                                <img src={p.imagen} alt="producto" className='flex aspect-square w-16 justify-center mix-blend-multiply' />
                                            </td>
                                            <td className='p-1 text-sm text-quinto sm:p-4'>{p.nombre}</td>
                                            <td className='p-1 sm:p-4'>
                                                <div className='flex flex-row items-center justify-center gap-3'>
                                                    <button className='rounded-lg bg-gray-300 px-2 text-xl text-quinto' onClick={() => actualizarCantidad(p._id, -1)}>-</button>
                                                    <h1 className='text-quinto sm:mx-2'>{p.stock}</h1>
                                                    <button className='rounded-lg bg-gray-300 px-2 text-xl text-quinto' onClick={() => actualizarCantidad(p._id, 1)}>+</button>
                                                </div>
                                            </td>
                                            <td className='p-1 text-left text-quinto sm:p-4'>{p.precio_oferta}</td>
                                            <td className='p-1 sm:p-4'>
                                                <img src={Delete} alt="Eliminar" className='mx-auto w-6 hover:cursor-pointer hover:bg-gray-300 sm:w-14 sm:rounded-xl sm:p-4' onClick={() => { eliminar(p._id) }} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className='mx-auto mt-auto flex w-full flex-col items-start justify-center rounded-xl bg-gray-300 p-4'>
                                <h3 className='flex w-full justify-between text-quinto'><span className='text-md'>Subtotal:</span><span>${subtotal}</span></h3>
                                <h3 className='flex w-full justify-between text-quinto'><span className='text-md'>Envio:</span><span>${envio}</span></h3>
                                <h3 className='flex w-full justify-between font-bold text-quinto'><span className='text-xl'>Total:</span><span>${total}</span></h3>
                            </div>
                            <div className='flex w-full items-center justify-center'>
                                <button className='w-full rounded-xl bg-primero p-2 px-6 text-2xl text-tercero sm:w-2/3'>Comprar</button>
                            </div>
                        </>
                    )}
            </div>
        </aside >
    );
}

export default Cart;
