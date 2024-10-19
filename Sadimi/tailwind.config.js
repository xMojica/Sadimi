const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{astro,html,js,jsx,svelte,ts,tsx}",
        flowbite.content(),
    ],
    theme: {
        extend: {
            fontFamily: {
                cursive: ["Pacifico", "cursive"],
            },
            colors: {
                background: "#fbf5f7a7",
                primero: "#4c7766",
                segundo: "#cce5db",
                tercero: "#eff7f5",
                cuarto: "#e36666",
                quinto: "#505956",
            },
            shadow: {
                glow: "0 0 5px rgba(37, 99, 235, 1), 0 0 10px rgba(37, 99, 235, 1), 0 0 15px rgba(37, 99, 235, 1),0 0 20px rgba(37, 99, 235, 1) ",
            },
            container: {
                center: true,
            },
        },
    },
    plugins: [flowbite.plugin()],
};
