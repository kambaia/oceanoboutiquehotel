import { ReactNode } from "react";
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
                <h2 className="text-lg font-medium">{title}</h2>
                <p className="mt-5">{description}</p>
                <Link to={`/`} className="flex flex-row items-center gap-1 mt-10">
                    <FaArrowRight />
                    <p>SAIBA MAIS</p>
                </Link>
            </div>
        </div>
    )
}