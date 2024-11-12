import { Carousel } from "flowbite-react";


function Carrusel() {
    return (
        <div className="mx-4 mt-24 h-56 rounded-xl sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <img className="rounded-xl bg-cover" src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blta2fce35bb94ed357/6711a02970e413dbf2d54743/V_Ofertas_hotsale_2024_Desk.png?disable=upscale&auto=webp&quality=70&width=1920" alt="..." />
                <img className="rounded-xl bg-cover" src="https://wallpapercave.com/wp/wp14320011.jpg" alt="..." />
                <img className="rounded-xl bg-cover" src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blteba28c9ad2ab5e96/671281884480109ed02d62b6/DESK-ASUS-18OCTUBRE-3840x1120_(1).jpg?disable=upscale&auto=webp&quality=70&width=1920" alt="..." />
                <img className="rounded-xl bg-cover" src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltf7038d16550e83f4/6712d911deba251cfca0fc9d/vitrina01_apple-c_hotsale_2024_desk.jpg?disable=upscale&auto=webp&quality=70&width=1920" alt="..." />
                <img className="rounded-xl bg-cover" src="https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltee42057d7c536313/6713af9d4e668ae1ae21c572/Vtr-vas-dsk-haceb-19oct.jpg?disable=upscale&auto=webp&quality=70&width=1920" alt="..." />
            </Carousel>
        </div>
    )
}

export default Carrusel;