import Container from "../../share/container";
import { WeDoCards } from "./Cards"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export function WhatWeDo() {

    return (
        <Container>
                <div className="w-full flex flex-col items-center justify-center pt-20 pb-20 text-xl gap-2" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="text-red-600 text-center">O QUE FAZEMOS</h2>
                    <h1 className="text-4xl font-medium text-center">As Nossas Soluções</h1>
                    <p className="w-[100px] border-b-2 border-red-600"></p>
                </div>
                <WeDoCards />
        </Container>
    )
}