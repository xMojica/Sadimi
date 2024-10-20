import React, { useContext } from 'react';
import { Context } from '../../Context/main';
import { useNavigate } from 'react-router-dom';

function Article({ product }) {

    const { setCarrito, setContadorCarrito } = useContext(Context);
    const navigate = useNavigate()

    function agregarCarrito() {
        setContadorCarrito(prevCount => prevCount + 1);

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
                (product.cantidad > 15 ? "+15 unidades disponibles" : product.cantidad + " unidades disponibles")
                :
                "Ultima unida disponible"
        )
    }


    return (
        <article className="flex h-96 w-40 flex-col justify-center overflow-hidden rounded-xl border-2 bg-tercero p-3 shadow-md hover:cursor-pointer hover:shadow-xl sm:h-[520px] sm:w-60" onClick={() => { navigate("/Producto", { state: product }) }}>

            <div className='relative flex h-32 w-full items-center justify-center sm:h-52'>
                {product.precio_oferta ?
                    <div className='absolute left-0 top-0 z-[41] w-14 justify-center rounded-lg bg-cuarto px-1 text-center text-sm font-bold text-tercero'>
                        -{calcularDescuento(product.precio_oferta, product.valor)}%
                    </div> : null
                }
                <img src={product.imagen} alt={product.nombre} width={200} className='z-40 aspect-square w-52 rounded-xl mix-blend-multiply' />
            </div>

            <div className='flex flex-col sm:my-2'>
                <h6 className='text-[10px] text-primero sm:text-sm'>{product.marca}</h6>
                <h1 className='text-sm text-quinto sm:text-xl'>{product.nombre}</h1>
            </div>

            <div className='mt-auto'>
                {mostrarPrecios()}
            </div>

            <div className='mt-1 flex flex-row flex-nowrap gap-2'>
                {product.colores && product.colores.map((color, index) => (
                    <span key={index} className='flex items-center justify-center rounded-[50%] border-2 border-quinto p-1'>
                        <svg className='hover:scale-150' width="16px" height="16px" viewBox="0 0 16 16" fill={color} strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="8" cy="8" r="8" />
                        </svg>
                    </span>
                ))}
            </div>

            <div className='mt-1'>
                <div className="flex items-center gap-x-1">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-xl ${i < 4 ? 'text-yellow-500' : 'text-gray-300'}`}>
                            {i < 4 ? '★' : '☆'}
                        </span>
                    ))}
                    <h6 className='hidden text-[12px] text-quinto sm:flex'>4.3 (54)</h6>
                </div>
            </div>

            <div className='mt-1 text-[11px] text-quinto sm:text-sm'>
                {mostrarCantidades()}
            </div>

            <div className='text-md mt-1 flex h-10 items-center justify-center rounded-xl bg-primero px-4 text-center font-bold text-tercero shadow-lg hover:scale-105 hover:shadow-lg' onClick={agregarCarrito}>Agregar</div>

        </article>
    );
}

export default Article;
