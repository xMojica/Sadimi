import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../Context/main';
import Carrusel from "../Carrusel/Carrusel"
import Loader from '../Alerts/Loader';
import Article from './Article';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Home() {
    const { busquedaProducto, setBusquedaProducto } = useContext(Context);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mensajeProductos, setMensajeProductos] = useState('');

    useEffect(() => {
        setBusquedaProducto("");
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://api-sadimi-v2.vercel.app/products');
                setProducts(response.data);
            } catch (err) {
                setMensajeProductos("No podemos mostrar nuestro catálogo en este momento, intenta más tarde.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();

    }, [setBusquedaProducto]);

    const productosFiltrados = products.filter(producto =>
        producto.nombre.toLowerCase().includes(busquedaProducto.toLowerCase()) ||
        producto.marca.toLowerCase().includes(busquedaProducto.toLowerCase())
    );

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Header />
                    <Carrusel />
                    <main className='flex w-full flex-wrap items-start justify-center gap-2 sm:mt-12'>
                        {productosFiltrados.length === 0 ? (
                            <h1 className='mt-4 flex text-center text-xl font-bold text-primero md:text-3xl'>
                                {mensajeProductos || "El producto que buscas no está disponible en este momento."}
                            </h1>
                        ) : (
                            productosFiltrados.map(producto => (
                                <Article key={producto._id} product={producto} />
                            ))
                        )}
                    </main>
                    <Footer />
                </>
            )}
        </>
    );
}

export default Home;
