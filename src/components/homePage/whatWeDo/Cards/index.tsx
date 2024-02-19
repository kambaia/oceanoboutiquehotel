import Container from "../../../share/container"
import { Link } from "react-router-dom";
import Image1 from '../../../../assets/Solutions/Card/solution1.jpg'
import Image2 from '../../../../assets/Solutions/Card/solution2.jpg'
import Image3 from '../../../../assets/Solutions/Card/solution3.jpg'

type CardProps = {
    title: string
    description: string
    image: ReactNode
}

export function WeDoCards({ title, description, image }: CardProps) {
    return (
        <Container>
            <div className="grid items-center justify-center rounded-md">
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


/* import { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

type CardProps = {
    title: string
    description: string
    icon: ReactNode
    solution: string
}

export function WeDoCards({ title, description, icon, solution }: CardProps) {
    return (
        <div className={`${solution} w-[300px] h-[450px] shadow-lg flex flex-col items-center gap-6 p-5 pt-10 bg-black`}>
            <div className="w-full flex justify-center items-center">
                <div className="w-[70px] h-[70px] bg-gray-100 rounded-full flex justify-center items-center">
                    {icon}
                </div>
            </div>
            <div className="w-full flex flex-col text-center justify-center items-center text-white">
                <h2 className="text-lg font-medium uppercase">{title}</h2>
                <p className="mt-5">{description}</p>
                <Link to={`/`} className="flex flex-row items-center gap-1 mt-10">
                    <FaArrowRight />
                    <p>SAIBA MAIS</p>
                </Link>
            </div>
        </div>
    )
} */