import React from "react";
import Header from "../Header/Header";
import Carrusel from "../Carrusel/Carrusel";

const Loader = () => {
    return (
        <>
            <Header />
            <Carrusel />
            <main className="flex flex-col items-center justify-center w-full h-full gap-4 min-w-96">
                <div className="flex items-center justify-center text-4xl border-8 border-gray-300 rounded-full h-28 w-28 animate-spin border-t-primero text-primero">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1em"
                        width="1em"
                        className="animate-ping"
                    >

                    </svg>
                </div>
            </main>
        </>
    );
};

export default Loader;



