import Container from "../share/container"
import { Link } from "react-router-dom"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer() {
    return (
        <div className="w-full pt-20 bg-[#202020]">
            <Container>
                <div className="flex flex-row flex-wrap gap-5 justify-between">
                    <div className="border-r px-20 h-20 flex items-center max-lg:w-full max-lg:border-0">
                        <img src={'/logo/logo.png'} alt="Logo" className="w-[180px] max-lg:w-full max-lg:flex max-lg:items-center" />
                    </div>
                    <div className="flex flex-col max-lg:mt-20">
                        <p className="text-white font-bold text-xl">Menu</p>
                        <ul className="flex flex-col gap-2 text-gray-300 mt-6 ml-4">
                            <li className="hover:text-white duration-200" ><Link to={`/`}>Home</Link></li>
                            <li className="hover:text-white duration-200" ><Link to={`/`}>NOSSOS QUARTOS</Link></li>
                            <li className="hover:text-white duration-200" ><Link to={`/`}>Galeria</Link></li>
                            <li className="hover:text-white duration-200" ><Link to={`/`}>Contactos</Link></li>
                        </ul>
                    </div>
                  
                    <div className=" flex flex-col max-lg:mt-10">
                        <p className="text-white font-bold text-xl">Contactos</p>
                        <div className="flex flex-row gap-4 mt-4 text-gray-300 ">
                            <FaLocationDot className="text-2xl text-[#4C96FF]" />
                            <div className="flex flex-col gap-1">
                                <p>MORADA:</p>
                                <p>Minha localização, Rua 100, Luanda, Angola</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 mt-4 text-gray-300 ">
                            <MdEmail className="text-2xl text-[#4C96FF]" />
                            <div className="flex flex-col gap-1">
                                <p>EMAIL:</p>
                                <Link to={'mailto:geral@balfaa.com'}>Geral@oceanoboutiquehotel.com</Link>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 mt-4 text-gray-300 ">
                            <FaPhone className="text-2xl text-[#4C96FF]" />
                            <div className="flex flex-col gap-1">
                                <p>TELEFONE:</p>
                                <p>(+244) 935999463</p>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="w-full flex-row flex-wrap py-5 bg-[#222527] px-20 text-white mt-5 flex items-center justify-center max-lg:mt-10">
                <Container>
                    <div className="flex flex-row flex-wrap gap-5 items-center justify-between">
                        <p>® | Todos os direitos reservados</p>
                        <div className="flex flex-row flex-wrap items-center justify-center gap-5">
                            <p><Link to={`/`}>Home</Link></p>
                            <p><Link to={`/sobre-nos`}>NOSSOS QUARTOS</Link></p>
                            <p><Link to={`/agro`}>GALERIA</Link></p>
                            <p><Link to={`/contacto`}>Contactos</Link></p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
