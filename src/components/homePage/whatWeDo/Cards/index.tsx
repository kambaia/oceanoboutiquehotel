import Container from "../../../share/container"
import { ReactNode } from "react"

type CardProps = {
    title: string
    description: string
    image: ReactNode
}

import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

export function WeDoCards({ title, description, image }: CardProps) {
    return (
        <Container>
            <div className="we-do-card grid items-center justify-center rounded-md" data-aos="fade-left">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 rounded-md">
                    <div className="rounded-md w-[288px] left-0 right-0 bg-blue-500 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-[400px] w-72 rounded-md">
                            <img className="h-full rounded-md w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={image} alt="Imagem" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h1 className="font-dmserif text-xl font-bold text-white">{title}</h1>
                            <p className="my-3 text-base italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{description}</p>
                            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
                        </div>
                    </div>
                </div>
            </div>

        </Container>
    )
}