import React from "react";

const Loader = () => {
    return (
        <main className="flex w-full flex-col items-center justify-center gap-4">
            <div className="flex h-28 w-28 animate-spin items-center justify-center rounded-full border-8 border-gray-300 border-t-primero text-4xl text-primero">
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="animate-ping"
                >
                    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8" />

                </svg>
            </div>
        </main>
    );
};

export default Loader;
