
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../../Context/main';
import Loader from './Loader';
import Article from './Article';
import Login from '../Login/Header/Login';

function Home() {

    const { busqueda } = useContext(Context);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://api-sadimi-v2.vercel.app/products');
                setProducts(response.data);
            } catch (err) {
                console.error('Error al obtener los productos: ', err);
            } finally {
                setLoading(false);
                console.log("Obtención de datos finalizada");
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <Loader />;
    }

    const productosFiltrados = products.filter(producto =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    if (productosFiltrados.length === 0) {
        return (
            <main className='my-20 flex w-full min-w-96 flex-wrap items-start justify-center gap-4 px-2 sm:px-4 md:items-center'>
                <h1 className='text-center text-xl text-primero md:text-3xl'>
                    El producto que buscas no está disponible en este momento.
                </h1>
            </main>
        );
    }

    return (
        <>
            <main className='my-20 flex w-full min-w-96 flex-wrap items-center justify-center gap-4 px-2 sm:px-4'>
                {productosFiltrados.map(producto => (
                    <Article key={producto._id} product={producto} />
                ))}
            </main>
            <Login />
        </>
    );
};

export default Home