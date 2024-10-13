/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                cursive: ["Pacifico", "cursive"],
            },
            colors: {
                background: "#fbf0f4",
                primero: "#4c7766",
                segundo: "#cce5db",
                tercero: "#ececec",
                cuarto: "#e36666",
                quinto: "#505956",
            },
            shadow: {
                glow: "0 0 5px rgba(37, 99, 235, 1), 0 0 10px rgba(37, 99, 235, 1), 0 0 15px rgba(37, 99, 235, 1),0 0 20px rgba(37, 99, 235, 1) ",
            },
        },
    },
    plugins: [],
};
