import React, { useContext } from 'react';
import { Context } from '../../Context/main';
import { useNavigate } from 'react-router-dom';

function Article({ product }) {

    const { setCarrito } = useContext(Context);
    const navigate = useNavigate()

    function agregarCarrito() {

        setCarrito(prevCarrito => {
            const productoExistente = prevCarrito.find(item => item._id === product._id);
            if (productoExistente) {
                return prevCarrito.map(item =>
                    item._id === product._id ? { ...item, stock: item.stock + 1 } : item
                );
            } else {
                return [...prevCarrito, { ...product, stock: 1 }];
            }
        });
    }

    function calcularDescuento() {
        const descuento = parseInt(product.precio_oferta * 100 / product.valor)
        return 100 - descuento;
    }

    function mostrarPrecios() {
        return (
            product.precio_oferta ? (
                <>
                    <h2 className='text-lg font-bold text-cuarto'>${product.precio_oferta}</h2>
                    <h2 className='text-sm text-quinto'><s>${product.valor}</s></h2>
                </>
            ) : (
                <h2 className='text-lg font-bold text-quinto'>${product.valor}</h2>
            )
        )
    }
    function mostrarCantidades() {
        return (
            product.cantidad !== 1 ?
                (product.cantidad + " unidades disponibles")
                :
                "Ultima unida disponible"
        )
    }


    return (
        <article className="flex h-[350px] w-40 flex-col justify-start overflow-hidden rounded-xl border-2 bg-tercero p-3 shadow-md hover:cursor-pointer hover:shadow-xl sm:h-[460px] sm:w-60" onClick={() => { navigate("/Producto", { state: product }) }}>

            <div className='relative flex h-32 w-full justify-center items-start sm:h-52'>
                {product.precio_oferta ?
                    <div className='absolute left-0 top-0 z-[41] w-14 justify-center rounded-lg bg-cuarto px-1 text-center text-sm font-bold text-tercero'>
                        -{calcularDescuento(product.precio_oferta, product.valor)}%
                    </div> : null
                }
                <img src={product.imagen} alt={product.nombre} width={200} className='z-40 aspect-square w-52 rounded-xl mix-blend-multiply' />
            </div>

            <div className='flex flex-col sm:my-2'>
                <h3 className='text-[10px] text-primero sm:text-sm'>{product.marca}</h3>
                <h1 className='text-sm text-quinto sm:text-xl'>{product.nombre}</h1>
            </div>

            <div className='mt-auto'>
                {mostrarPrecios()}
            </div>


            <div className='mt-2 text-[11px] text-quinto sm:text-sm'>
                {mostrarCantidades()}
            </div>

            <div className='text-md mt-2 flex h-10 items-center justify-center rounded-xl bg-primero px-4 text-center font-bold text-tercero shadow-lg hover:scale-105 hover:shadow-lg' onClick={agregarCarrito}>Agregar</div>

        </article>
    );
}

export default Article;
