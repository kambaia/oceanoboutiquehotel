import Container from "../../share/container";
import { WeDoCards } from "./Cards"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export function Gallery() {

    return (
        <Container>
                <div className="w-full flex flex-col items-center justify-center pt-20 pb-20 text-xl gap-2" data-aos="fade-up" data-aos-duration="1000">
                    <h1 className="text-4xl font-medium text-center">Galeria de fotos</h1>
                    <p className="w-[100px] border-b-2 border-[#4C96FF]"></p>
                </div>
                <WeDoCards />
        </Container>
    )
}