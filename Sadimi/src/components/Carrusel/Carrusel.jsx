import { Carousel } from "flowbite-react";
import Portada from "../../assets/portada.png"
import Portada2 from "../../assets/portada2.png"


function Carrusel() {
    return (
        <div className="mx-2 h-56 sm:h-64 xl:h-80 2xl:h-96 my-4">
            <Carousel>
                <img className="h-full w-full rounded-3xl  object-cover object-center " src={Portada2} alt="Banner" />
                <img className="h-full w-full rounded-3xl  object-cover object-center " src={Portada} alt="Banner" />
            </Carousel>
        </div>
    )
}

export default Carrusel;