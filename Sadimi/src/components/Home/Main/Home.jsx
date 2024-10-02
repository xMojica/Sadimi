
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Context } from '../../../Context/main';
import Loader from './Loader';
import Header from '../../Header/Header';
import Article from './Article';
import Footer from '../../Footer/Footer';

function Home() {
    const context = useContext(Context);
    const [products, setProducts] = useState([]);
    let productosFiltrados = []

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://api-sadimi-v2.vercel.app/products');
                setProducts(response.data);
            } catch (err) {
                console.log('Error al obtener los productos', err);
            } finally {
                console.log("Obtencion de datos finalizada")
            }
        };
        fetchProducts();
    }, []);

    // Muestra la barra de carga antes de traer los datos del GET
    if (products.length !== 0) {
        productosFiltrados = products.filter(product =>
            product.nombre.toLowerCase().includes(context.busqueda.toLowerCase())
        );
    } else {
        return (
            <Loader />
        )
    }

    if (productosFiltrados.length === 0) {
        return (
            <>
                <Header />
                <main className='my-20 flex w-full min-w-96 flex-wrap items-start justify-center gap-4 px-2 sm:px-4 md:items-center'>
                    <h1 className='text-center text-xl text-primero md:text-3xl'>No existe ningún producto que coincida con la búsqueda.</h1>
                </main>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Header />
            <main className='my-20 flex w-full min-w-96 flex-wrap items-center justify-center gap-4 px-2 sm:px-4'>
                {productosFiltrados.map(product => (
                    <Article key={product._id} product={product} />
                ))}
            </main>
            <Footer />
        </>
    );

}

export default Home