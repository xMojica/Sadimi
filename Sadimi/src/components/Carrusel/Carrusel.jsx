import { Carousel } from "flowbite-react";
import Portada from "../../assets/portada.png"


function Carrusel() {
    return (
        <div className="mx-4 h-56 sm:h-64 xl:h-80 2xl:h-96 my-4">
            <Carousel>
                <img className="h-full w-full rounded-md sm:rounded-b-[3rem] object-cover object-center " src={Portada} alt="Banner" />
            </Carousel>
        </div>
    )
}

export default Carrusel;