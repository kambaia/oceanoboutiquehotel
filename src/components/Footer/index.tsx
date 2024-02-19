import Container from "../share/container"
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom"

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export function Footer() {
    return ( 
        <div className="footer w-full pt-20 bg-[#202020]">
            <Container>
                <div className="flex flex-row justify-between">

                    <div className="border-r px-20 h-20 flex items-center">
                        <img src={Logo} alt="Logo" className="w-[150px]" />
                    </div>

                    <div>
                        <p className="text-white font-bold text-xl">Menu</p>
                        <ul className="flex flex-col gap-2 text-gray-300 mt-6 ml-4">
                            <li className="hover:text-white hover:pl-2 duration-300"><Link to={`/`}>Home</Link></li>
                            <li className="hover:text-white hover:pl-2 duration-300"><Link to={`/`}>Soluções</Link></li>
                            <li className="hover:text-white hover:pl-2 duration-300"><Link to={`/`}>Sobre</Link></li>
                            <li className="hover:text-white hover:pl-2 duration-300"><Link to={`/`}>Ferramentas</Link></li>
                            <li className="hover:text-white hover:pl-2 duration-300"><Link to={`/`}>Blog</Link></li>
                            <li className="hover:text-white hover:pl-2 duration-300"><Link to={`/`}>Glossário</Link></li>
                            <li className="hover:text-white hover:pl-2 duration-300"><Link to={`/`}>Contactos</Link></li>
                        </ul>
                    </div>


                    <div>
                        <p className="text-white font-bold text-xl">Soluções</p>
                        <ul className="flex flex-col gap-2 text-gray-300 mt-6 ml-4">
                            <li className="hover:text-white hover:pl-2 duration-300"><Link to={`/`}>Consultoria e Controlo de Gestão</Link></li>
                            <li className="hover:text-white hover:pl-2 duration-300"><Link to={`/`}>Corporate Finance</Link></li>
                            <li className="hover:text-white hover:pl-2 duration-300"><Link to={`/`}>Cultura e Liderança</Link></li>
                            <li className="hover:text-white hover:pl-2 duration-300"><Link to={`/`}>Apoios e Incentivos Financeiros e Fiscais</Link></li>
                        </ul>
                    </div>


                    <div className="w-[250px]">
                        <p className="text-white font-bold text-xl">Contactos</p>
                        <div className="flex flex-row gap-4 mt-4 text-gray-300 ">
                            <FaLocationDot className="text-3xl text-red-600" />
                            <div className="flex flex-col gap-1">
                                <p>MORADA:</p>
                                <p>Via Expressa,Luanda, Angola</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 mt-4 text-gray-300 ">
                            <MdEmail className="text-2xl text-red-600" />
                            <div className="flex flex-col gap-1">
                                <p>EMAIL:</p>
                                <p>geral@grupoboavida.co.ao</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 mt-4 text-gray-300 ">
                            <FaPhone className="text-2xl text-red-600" />
                            <div className="flex flex-col gap-1">
                                <p>TELEFONE:</p>
                                <p>(+244) 931 251 965</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="w-full h-[80px] bg-[#222527] px-20 text-white mt-5 flex items-center justify-center">
                <Container>
                    <div className="flex flex-row items-center justify-between">
                        <p>B.ALFA - Investimentos & Consultória, LDA ® | Todos os direitos reservados</p>
                        <div className="flex flex-row items-center justify-center gap-5">
                            <p className="hover:text-white hover:pb-2 duration-300"><Link to={`/sobre-nos`}>Sobre Nós</Link></p>
                            <p className="hover:text-white hover:pb-2 duration-300"><Link to={`/`}>Soluções</Link></p>
                            <p className="hover:text-white hover:pb-2 duration-300"><Link to={`/`}>Notícias</Link></p>
                            <p className="hover:text-white hover:pb-2 duration-300"><Link to={`/contacto`}>Contactos</Link></p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}