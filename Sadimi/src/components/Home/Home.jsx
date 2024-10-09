import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../Context/main';
import Loader from '../Alerts/Loader';
import Article from './Article';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Home() {
    const { busquedaProducto } = useContext(Context);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mensajeProductos, setMensajeProductos] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://api-sadimi-v2.vercel.app/products');
                setProducts(response.data);
            } catch (err) {
                setMensajeProductos("No podemos mostrar nuestro catálogo en este momento, intentalo mas tarde.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const productosFiltrados = products.filter(producto =>
        producto.nombre.toLowerCase().includes(busquedaProducto.toLowerCase())
    );

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Header />
                    <main className='my-8 flex w-full min-w-96 flex-wrap items-center justify-center gap-4 px-2 sm:px-4'>
                        {productosFiltrados.length === 0 ? (
                            <h1 className='text-center text-xl text-primero md:text-3xl'>
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
