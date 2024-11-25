import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import IconoCarrito from "../../assets/agregarCarrito.svg"
import { Context } from '../../Context/main';
import Atras from './../Login/Header/Atras';


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
            <main className='mt-2  p-4'>
                <span className='flex absolute ml-4 mt-4 z-[55]'>
                    <Atras />
                </span>
                <article className='flex flex-col shadow-xl rounded-xl p-4 '>
                    <section className='flex justify-center object-contain flex-grow'>
                        <img className='mix-blend-multiply h-96 min-w-96' src={product.imagen} alt={product.nombre} />
                    </section>
                    <section className='mt-4 flex flex-wrap justify-between p-4'>
                        <div className='xl:w-3/5 w-full'>
                            <h6 className='text-quinto text-sm '>{product.marca}</h6>
                            <h1 className='text-quinto text-2xl sm:text-3xl  font-bold'>{product.nombre}</h1>
                            <p className='my-4 text-quinto text-lg'>{product.descripcion}</p>
                        </div>
                        <div className='xl:w-2/5 mt-8 xl:mt-0 flex flex-col xl:flex-col sm:flex-row justify-between xl:justify-start w-full xl:pl-8'>
                            <span className='relative flex flex-col justify-center '>
                                <span className='flex flex-row gap-x-2'>
                                    <h1 className=' text-cuarto text-start sm:text-start text-3xl font-bold'>$ {product.precio_oferta}</h1>
                                    <h3 className=' bg-cuarto rounded-md text-sm px-4 p-2 text-center my-auto font-bold text-tercero'>{product.descuento}</h3>
                                </span>
                                <h3 className='text-quinto text-start sm:text-start text-xl'><s>$ {product.valor}</s></h3>
                            </span>
                            <span className='gap-4 flex mt-4 sm:mt-0 xl:mt-4'>
                                <button className='p-4 rounded-xl border-2 border-gray-300 text-tercero shadow-lg' onClick={agregarCarrito}><img src={IconoCarrito} alt="Agregar" className='w-12' /></button>
                                <button className='px-12 py-5 rounded-xl bg-primero shadow-lg text-tercero text-xl w-full font-bold '>Comprar</button>
                            </span>
                        </div>
                    </section>
                </article>
            </main>
            <Footer />
        </>
    );
}

export default Producto;
