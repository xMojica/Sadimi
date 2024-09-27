import React from 'react'
import Carrito from '../../public/carrito'

function Home() {
    return (
        <main className='mt-20 flex w-full flex-wrap items-center justify-center gap-4'>
            <article className="h-96 w-72 justify-center overflow-hidden rounded-xl border-2 bg-tercero p-3 shadow-lg hover:cursor-pointer">
                <div className='flex w-full items-center justify-center'>
                    <img src="producto.jpg" alt="Producto" className='rounded-xl shadow-md' />
                </div>
                <div className='my-2 flex flex-col'>
                    <h6 className='text-[0.7rem] text-primero'>Xiaomi</h6>
                    <h1 className='mb-4 whitespace-nowrap text-2xl font-semibold text-quinto'>Redmi Note 13 Pro+</h1>
                    <p>Lorem ipsum dsinus!</p>
                </div>
                <div className='h- flex flex-row items-center justify-between'>
                    <span className='flex flex-col'>
                        <h3 className='text-xl font-bold text-cuarto'>$ 4.999.900</h3>
                        <h4 className='text-md font-semibold text-quinto'><s>$ 5.999.900</s></h4>
                    </span>
                    <div className='flex h-10 w-1/3 items-center justify-center rounded-lg bg-primero text-right text-xl text-tercero shadow-md hover:-translate-y-1 hover:scale-105'>
                        <Carrito client:load color={"#ececec"} />
                    </div>
                </div>
            </article>

        </main>
    )
}

export default Home