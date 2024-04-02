import Container from "../share/container"
import Logo from '../../assets/SVG/Ativo 24.svg'
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
                        <img src={Logo} alt="Logo" className="w-[150px] max-lg:w-full max-lg:flex max-lg:items-center" />
                    </div>
                    <div className="flex flex-col max-lg:mt-20">
                        <p className="text-white font-bold text-xl">Menu</p>
                        <ul className="flex flex-col gap-2 text-gray-300 mt-6 ml-4">
                            <li className="hover:text-white duration-200" ><Link to={`/`}>Home</Link></li>
                            <li className="hover:text-white duration-200" ><Link to={`/`}>Soluções</Link></li>
                            <li className="hover:text-white duration-200" ><Link to={`/`}>Sobre</Link></li>
                            <li className="hover:text-white duration-200" ><Link to={`/`}>Contactos</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col max-lg:mt-10">
                        <p className="text-white font-bold text-xl">Soluções</p>
                        <ul className="flex flex-col gap-2 text-gray-300 mt-6 ml-4">
                            <li className="hover:text-white duration-200" ><Link to={`/service/estudos-financeiros`}>Estudos Financeiros e Análise de Viabilidade</Link></li>
                            <li className="hover:text-white duration-200" ><Link to={`/service/planos-marketing`}>Planos de Marketing e Estudos de Mercado</Link></li>
                            <li className="hover:text-white duration-200" ><Link to={`/service/graficas-digitais`}>Criações Gráficas Digitais</Link></li>
                            <li className="hover:text-white duration-200" ><Link to={`/service/marketing-digital`}>Marketing Digital</Link></li>
                            <li className="hover:text-white duration-200" ><Link to={`/service/aconselhamento-tecnico`}>Aconselhamento técnico na agricultura</Link></li>
                            <li className="hover:text-white duration-200" ><Link to={`/service/business-oportunities`}>Oportunidades de Negócios em Angola</Link></li>
                            <li className="hover:text-white duration-200" ><Link to={`/service/avaliacao-empresas`}>Avaliação de empresas e negócios</Link></li>
                        </ul>
                    </div>
                    <div className=" flex flex-col max-lg:mt-10">
                        <p className="text-white font-bold text-xl">Contactos</p>
                        <div className="flex flex-row gap-4 mt-4 text-gray-300 ">
                            <FaLocationDot className="text-2xl text-red-600" />
                            <div className="flex flex-col gap-1">
                                <p>MORADA:</p>
                                <p>Projecto Nova Vida, Rua 29, Luanda, Angola</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 mt-4 text-gray-300 ">
                            <MdEmail className="text-2xl text-red-600" />
                            <div className="flex flex-col gap-1">
                                <p>EMAIL:</p>
                                <Link to={'mailto:geral@balfaa.com'}>geral@balfaa.com</Link>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 mt-4 text-gray-300 ">
                            <FaPhone className="text-2xl text-red-600" />
                            <div className="flex flex-col gap-1">
                                <p>TELEFONE:</p>
                                <p>(+244) 927 988 743</p>
                                <p>(+244) 997 533 711</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="w-full flex-row flex-wrap py-5 bg-[#222527] px-20 text-white mt-5 flex items-center justify-center max-lg:mt-10">
                <Container>
                    <div className="flex flex-row flex-wrap gap-5 items-center justify-between">
                        <p>B.ALFA - Consultória & Investimentos, LDA ® | Todos os direitos reservados</p>
                        <div className="flex flex-row flex-wrap items-center justify-center gap-5">
                            <p><Link to={`/`}>Home</Link></p>
                            <p><Link to={`/sobre-nos`}>Sobre Nós</Link></p>
                            <p><Link to={`/agro`}>Agro</Link></p>
                            <p><Link to={`/contacto`}>Contactos</Link></p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
