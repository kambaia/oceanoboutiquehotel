import { ReactNode } from "react"
import { Link } from "react-router-dom"

type CardProps = {
    title: string
    description: string
    order: string
    icon: ReactNode
}

export function CardWeGive({ title, description, icon, order }: CardProps) {
    return (
        <div>
            <div className="z-10 relative w-[300px] h-[450px] rounded-md bg-white p-5 flex flex-col gap-5">
                <div className="w-full flex justify-start items-start mt-5">
                    <div className="w-[90px] h-[90px] bg-red-600 rounded-full flex justify-center items-center">
                        {icon}
                    </div>
                </div>
                <div className="w-full flex flex-col text-start items-start text-white">
                    <h2 className="text-2xl font-medium text-black">{title}</h2>
                    <p className="mt-5 text-black">{description}</p>
                    <Link to={`/`} className="text-black w-full flex flex-row justify-between items-center gap-1 mt-10">
                        <p className="text-4xl font-medium text-gray-300 pr-4">{order}</p>
                        <p className="border-b-2 w-full px-2"></p>
                        <p className="w-full text-base text-end text-gray-600 font-medium">VER MAIS</p>
                    </Link>
                </div>
            </div>
            <div className="z-30 card w-[300px] h-[450px] mt-[-450px]"></div>
        </div>
    )
}