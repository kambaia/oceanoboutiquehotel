import Layout from "../../layout";
import { TopBanner } from "../../components/share/topBanner";
import Container from "../../components/share/container";
import { Navbar } from "../../components/Header/Navbar";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { Helmet } from "react-helmet";

export default function ContactPage() {
    return (
        <>
         <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>B.ALFA - Consultória & Investimentos, LDA- Contacto</title>
                <meta name="description" content="A B.Alfa Consultoria e Investimentos é um grupo que actua nas áreas, da economia, finanças, agricultura, pescas e pecuária." />
                <meta name="keywords" content="B.Alfa, Consultoria, investimento, marketing, design" />
                <meta name="robots" content="home, sobre, contacto, agro" />
                <link rel="canonical" href="https://www.balfaa.com/" />
                {/* <!-- Tags Open Graph para redes sociais --> */}
                <meta property="og:title" content="B.ALFA - Consultória & Investimentos, LDA- Contacto" />
                <meta property="og:description" content="A B.Alfa Consultoria e Investimentos é um grupo que actua nas áreas, da economia, finanças, agricultura, pescas e pecuária." />
                <meta property="og:image" content="https://www.balfaa.com/assets/Ativo%2025-ylsEE4mT.svg" />
                <meta property="og:facebook" content="https://www.facebook.com/people/B-Alfa/61556553600172/" />
                <meta property="og:instagram" content="https://www.instagram.com/balfa_invest_e_consultoria_/" />

            </Helmet>
        <Layout>
            <div className="w-full bg-white relative">
                <Navbar />
            </div>
            <TopBanner title="Contactos" tipo="contact-banner" />

            <Container>
                <div className="w-full py-32 px-20 my-20 bg-red-700 flex flex-row justify-around max-lg:p-5 flex-wrap">
                    <div >
                        <div className="bg-white w-[450px] relative z-20 flex flex-col gap-4 p-20 max-lg:w-full max-lg:h-auto max-lg:p-5">
                            <h1 className="text-3xl font-bold" >Vamos Conversar?</h1>
                            <p className="text-gray-600 text-justify">Entre em contacto connosco e faça-nos chegar as suas questões. Estamos certos que teremos a solução para si.</p>
                            <div className="flex flex-row items-center gap-3 mt-4">
                                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-full w-[50px] h-[50px] flex justify-center items-center text-white text-xl">
                                    <FaLocationDot />
                                </div>
                                <p>Projeto Nova Vida, Rua 29 , Luanda, Angola</p>
                            </div>
                            <div className="flex flex-row items-center gap-3 mt-4">
                                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-full w-[50px] h-[50px] flex justify-center items-center text-white text-xl">
                                    <FaPhone />
                                </div>
                                <p>(+244) 927 988 743</p>
                            </div>
                            <div className="flex flex-row items-center gap-3 mt-4">
                                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-full w-[50px] h-[50px] flex justify-center items-center text-white text-xl">
                                    <FaWhatsapp />
                                </div>
                                <p>(+244) 997 533 711</p>
                            </div>
                        </div>

                        {/* Div de Sombra do Card Principal */}
                        <div className="bg-white opacity-30 w-[450px] h-[450px] mt-[-425px] ml-[25px] z-10 max-lg:hidden"></div>
                    </div>

                    <div className="w-[600px] p-6 flex flex-col gap-14 max-lg:gap-6 max-lg:p-0 max-lg:pt-6">
                        <input type="text" placeholder="Nome" className="bg-transparent border-b p-1 outline-none text-base text-white w-full placeholder:text-white focus:bg-transparent" />
                        <div className="flex flex-row gap-6 max-lg:flex-wrap">
                            <input type="email" placeholder="Email" className="bg-transparent border-b p-1 outline-none text-base text-white w-full placeholder:text-white focus:bg-transparent" />
                            <input type="text" placeholder="Telefone" className="bg-transparent border-b p-1 outline-none text-base text-white w-full placeholder:text-white focus:bg-transparent" />
                        </div>
                        <textarea name="message" id="message" cols={30} rows={6} placeholder="Digite a sua Mensagem" className="bg-transparent border-b w-full text-white text-base outline-none placeholder:text-white"></textarea>
                        <div className="w-full">
                            <button className="flex flex-row items-center gap-1 text-red-600 bg-white p-4 px-6 rounded-md">
                                <p className="font-medium">Enviar Mensagem</p>
                                <IoIosSend />
                            </button>
                        </div>
                    </div>
                </div>
            </Container>

        </Layout>
        </>
    )
}