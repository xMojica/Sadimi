import React, { useContext, useCallback, useState, useEffect } from 'react';
import { Context } from '../../Context/main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import Trash from './Trash';

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
            {carrito.length > 0 ? (
                <main className="flex flex-col items-start justify-start w-full gap-4 p-4 mt-8 md:flex-row">

                    <section className="w-full md:w-2/3">
                        {carrito.map((product) => (
                            <article
                                key={product._id}
                                className="relative flex flex-wrap items-center p-2 mb-2 border-2 border-gray-300 rounded-lg bg-tercero text-quinto"
                            >
                                <div className=''>
                                    <img
                                        src={product.imagen}
                                        alt={product.nombre}
                                        className="h-32 mix-blend-multiply md:h-44 lg:h-52" />
                                </div>
                                <div>
                                    <h1 className="text-sm font-bold lg:text-xl">{product.nombre}</h1>
                                    <div className="">
                                        <div className="">
                                            <button
                                                className="px-2 rounded-lg"
                                                onClick={() => manejarCantidad(product, -1)}
                                            >
                                                -
                                            </button>
                                            <p>{product.cantidad}</p>
                                            <button
                                                className="px-2 rounded-lg"
                                                onClick={() => manejarCantidad(product, 1)}
                                            >
                                                +
                                            </button>
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
                        <button className="p-2 text-xl rounded-xl bg-primero text-tercero hover:scale-105">
                            Pagar
                        </button>
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
