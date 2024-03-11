import { FaLocationDot } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Container from "../share/container";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header-informations w-full py-4 bg-deep-gray text-white flex ">
            <Container>
                <div className="flex flex-row flex-wrap gap-5 justify-between items-center">

                    <div className="flex flex-row gap-5">
                        <div className="flex flex-row gap-2 justify-between items-center ">
                            <FaLocationDot />
                            <p>Projecto Nova Vida, Rua 19, Luanda, Angola</p>
                        </div>

                        <div className="flex flex-row gap-2 justify-start items-center  pl-5 border-l">
                            <IoMdMailOpen />
                            <p>geral@balfaa.ao</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-6 justify-between items-center ">
                        <div className="flex flex-row gap-1 justify-between items-center">
                            <MdAccessTimeFilled />
                            <p>Horário: 09:00 – 17:00</p>
                        </div>
                        <div className="flex flex-row gap-3 justify-between items-center text-lg pl-5 border-l">
                            <Link to={'https://www.facebook.com/people/B-Alfa/61556553600172/'} target="_blank">
                            <FaFacebookF />
                            </Link>
                            <Link to={'https://www.instagram.com/balfa_invest_e_consultoria_/'} target="_blank">
                            <FaInstagram />
                            </Link>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}