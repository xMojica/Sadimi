import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import IconoCarrito from "../../assets/agregarCarrito.svg"
import { Context } from '../../Context/main';


function Producto() {
    const { carrito, setCarrito } = useContext(Context);
    const [contador, setContador] = useState(1)
    const product = useLocation().state;

    function agregarCarrito() {

        setCarrito(prevCarrito => {
            const productoExistente = prevCarrito.find(item => item._id === product._id);
            if (productoExistente) {
                return prevCarrito.map(item =>
                    item._id === product._id ? { ...item, stock: item.stock + contador } : item
                );
            } else {
                return [...prevCarrito, { ...product, stock: contador }];
            }
        });
    }

    function manejarContador(cantidad) {
        if ((contador != 0 || cantidad != -1) && contador < product.cantidad) {
            setContador(contador + cantidad)
        }
    }

    return (
        <>
            <Header />
            <main className='mt-36 p-4 sm:mt-32'>
                <div className='flex-wrap flex items-start justify-center shadow-xl border border-gray-300 rounded-xl p-4'>
                    <section className='flex justify-center object-contain flex-grow'>
                        <img className='mix-blend-multiply h-96 min-w-96' src={product.imagen} alt={product.nombre} />
                    </section>
                    <section className='mx-auto flex flex-col justify-start lg:flex-grow lg:min-h-[24rem]'>
                        <h6 className='text-quinto text-sm '>{product.marca}</h6>
                        <h1 className='text-quinto text-2xl sm:text-3xl  font-bold'>{product.nombre}</h1>
                        <p className='my-4 text-quinto text-xl'>{product.descripcion}</p>
                        <span className=' flex max-w-max items-center gap-x-2 rounded-lg border-2 text-quinto font-bold border-gray-300 p-2 text-sm shadow-lg lg:gap-x-4 lg:text-xl'>
                            <button className='rounded-lg px-2' onClick={() => manejarContador(-1)}>-</button>
                            <p>{contador}</p>
                            <button className='rounded-lg px-2' onClick={() => manejarContador(1)}>+</button>
                        </span>
                        <h1 className='mt-10 text-cuarto text-2xl font-bold'>{product.precio_oferta}</h1>
                        <h3 className='text-quinto text-xl '><s>{product.valor}</s></h3>

                        <div className='mt-10 lg:mt-auto flex gap-4 justify-center lg:justify-end'>
                            <button className='p-4 rounded-xl border-2 border-gray-300 text-tercero shadow-lg'><img src={IconoCarrito} alt="Agregar" onClick={agregarCarrito} /></button>
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
