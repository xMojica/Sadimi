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
            <main className='mt-2 p-4'>
                <span className='flex absolute ml-4 '>
                    <Atras />
                </span>
                <div className='flex-wrap flex items-start justify-center shadow-xl rounded-xl p-4'>
                    <section className='flex justify-center object-contain flex-grow'>
                        <img className='mix-blend-multiply h-96 min-w-96' src={product.imagen} alt={product.nombre} />
                    </section>
                    <section className='mx-auto flex flex-col justify-start lg:flex-grow lg:min-h-[24rem]'>
                        <h6 className='text-quinto text-sm '>{product.marca}</h6>
                        <h1 className='text-quinto text-2xl sm:text-3xl  font-bold'>{product.nombre}</h1>
                        <p className='my-4 text-quinto text-xl'>{product.descripcion}</p>
                        <span className='mt-4 flex max-w-max items-center gap-x-2 rounded-lg border-2 text-quinto font-bold border-gray-300 p-2 text-sm shadow-lg lg:gap-x-4 lg:text-xl'>
                            <button className='rounded-lg px-2' onClick={() => manejarContador(-1)}>-</button>
                            <p>{contador}</p>
                            <button className='rounded-lg px-2' onClick={() => manejarContador(1)}>+</button>
                        </span>
                        <p className='text-quinto'>100 unidades disponibles</p>
                        <div className='mt-10 lg:mt-36 w-full  flex flex-col sm:flex-row gap-4 justify-center sm:justify-between'>
                            <span className='flex flex-col justify-center align-middle'>
                                <h1 className='text-cuarto text-start sm:text-start text-3xl font-bold'>$ {product.precio_oferta} <span className='absolute ml-2 p-1 bg-cuarto rounded-md text-sm px-2 text-tercero'>-30%</span></h1>
                                <h3 className='text-quinto text-start sm:text-start text-xl'><s>$ {product.valor}</s></h3>
                            </span>
                            <span className='gap-4 flex justify-center'>
                                <button className='p-4 rounded-xl border-2 border-gray-300 text-tercero shadow-lg'><img src={IconoCarrito} alt="Agregar" onClick={agregarCarrito} /></button>
                                <button className='px-12 py-5 rounded-xl bg-primero shadow-lg text-tercero text-xl'>Comprar</button>
                            </span>

                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Producto;
