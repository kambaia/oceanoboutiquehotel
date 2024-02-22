import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

type BannerProps = {
    title?: string
    tipo: string
}

export function TopBanner( { title, tipo }:BannerProps ) {
    return(
        <div className={`w-full ${tipo} h-[400px] flex flex-col gap-4 justify-center items-center`}>
            <h1 className="text-4xl text-white font-bold" >{title}</h1>
            <div className="flex flex-row gap-4 text-base font-medium text-white">
                <Link to={`/`} className="flex flex-row gap-1 items-center">
                    <FaHome />
                    <p>HOME</p>
                </Link>
                <p> - </p>
                <p className="uppercase">{title}</p>
            </div>
        </div>
    )
}