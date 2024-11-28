import React, { useContext, useCallback, useState, useEffect } from 'react';
import { Context } from '../../Context/main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Trash from './Trash';
import Atras from "../Login/Header/Atras"

function Cart() {
    const { carrito, setCarrito } = useContext(Context);
    const navigate = useNavigate();
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);

    const vaciarCarrito = useCallback(() => setCarrito([]), [setCarrito]);

    const eliminarProducto = (product) => {
        if (!product) return;
        setCarrito(carrito.filter((item) => item._id !== product._id));
    };

    const manejarCantidad = (product, cambio) => {
        if (!product) return;
        const nuevaCantidad = product.cantidad + cambio;

        if (nuevaCantidad >= 0 && nuevaCantidad <= product.stock) {
            setCarrito((prevCarrito) =>
                prevCarrito.map((item) =>
                    item._id === product._id ? { ...item, cantidad: nuevaCantidad } : item
                )
            );
        }
    };

    useEffect(() => {
        const calcularTotal = () => {
            const nuevoSubtotal = carrito.reduce(
                (acc, product) => acc + product.precio_oferta * product.cantidad,
                0
            );
            setSubtotal(nuevoSubtotal);
            setTotal(nuevoSubtotal);
        };
        calcularTotal();
    }, [carrito]);

    return (
        <>
            <Header />
            <span className='pt-2 flex  pl-4 z-[54]'>
                <Atras />
            </span>
            {carrito.length > 0 ? (
                <main className="flex flex-col items-start justify-start w-full gap-4 p-4 mt-8 md:flex-row">
                    <section className="w-full md:w-2/3">
                        {carrito.map((product) => (
                            <article
                                key={product._id}
                                className="relative flex flex-col p-2 mb-2 border-2 border-gray-300 rounded-lg sm:flex-row bg-tercero text-quinto">
                                <div className='flex items-center justify-center h-52'>
                                    <img
                                        className="h-auto w-44 mix-blend-multiply"
                                        src={product.imagen}
                                        alt={product.nombre} />
                                </div>
                                <div className='flex flex-col justify-between w-full mt-4 ml-4'>
                                    <span className='w-full'>
                                        <h1 className="text-lg font-bold md:text-2xl lg:text-3xl">{product.nombre}</h1>
                                        <h2 className='mt-2 text-2xl font-bold text-cuarto'>$ 4.999.900</h2>
                                    </span>
                                    <div className="flex flex-row items-center justify-between w-full">
                                        <div className='items-center flex-flex-col'>
                                            <div className="flex flex-row items-center justify-between text-2xl w-28 text-quinto gap-x-4">
                                                <button
                                                    className="px-2 rounded-lg bg-segundo"
                                                    onClick={() => manejarCantidad(product, -1)}>
                                                    -
                                                </button>
                                                <p className=''>{product.cantidad}</p>
                                                <button
                                                    className="px-2 rounded-lg bg-segundo"
                                                    onClick={() => manejarCantidad(product, 1)}>
                                                    +
                                                </button>
                                            </div>
                                            <p className='mt-2 text-sm '>+100 Unidades disponibles</p>
                                        </div>
                                        <Trash eliminar={eliminarProducto} product={product} />
                                    </div>
                                </div>

                            </article>
                        ))}
                    </section>

                    <section className="flex flex-col w-full gap-4 p-4 border-2 border-gray-300 shadow-lg rounded-xl bg-tercero text-quinto md:w-1/3">
                        <h1 className="text-sm font-bold lg:text-xl">Checkout</h1>
                        <hr />
                        <div>
                            <h4 className="text-sm lg:text-lg">
                                Subtotal: <span className=" float-end">${subtotal}</span>
                            </h4>
                            <h4 className="text-sm lg:text-lg">
                                Envío: <span className="float-end text-primero">Gratis</span>
                            </h4>
                            <h4 className="mt-4 text-sm font-extrabold lg:text-lg">
                                Total: <span className="float-end">${total}</span>
                            </h4>
                        </div>
                        <div className='flex gap-4'>
                            <button className="p-2 px-4 text-xl border-2 border-gray-300 rounded-xl text-quinto hover:scale-105 hover:bg-cuarto hover:text-tercero hover:border-none">Vaciar</button>
                            <button className="w-full p-2 text-xl rounded-xl bg-primero text-tercero hover:scale-105">
                                Pagar
                            </button>
                        </div>

                    </section>
                </main>
            ) : (
                <h1 className="flex justify-center w-full p-4 text-3xl font-bold text-center my-52 text-quinto sm:my-56">
                    El carrito de compras está vacío
                </h1>
            )}
            <Footer />
        </>
    );
};

export default Cart;
