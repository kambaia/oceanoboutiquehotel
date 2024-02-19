import Layout from "../../layout";
import { TopBanner } from "../../components/share/topBanner";
import Container from "../../components/share/container";
import { Navbar } from "../../components/Header/Navbar";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export default function ContactPage() {
    return (
        <Layout>
            <Navbar />
            <TopBanner title="Contactos" tipo="contact-banner" />

            <Container>
                <div className="w-full py-32 px-20 my-20 bg-red-700 flex flex-row justify-around ">
                    <div >
                        <div className="bg-white w-[450px] h-[450px] relative z-20 flex flex-col gap-4  p-20">
                            <h1 className="text-3xl font-bold" >Vamos Conversar?</h1>
                            <p className="text-gray-600 text-justify">Entre em contacto connosco e faça-nos chegar as suas questões. Estamos certos que teremos a solução para si.</p>
                            <div className="flex flex-row items-center gap-3 mt-4">
                                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-full w-[50px] h-[50px] flex justify-center items-center text-white text-xl">
                                    <FaLocationDot />
                                </div>
                                <p>Via Expressa,Luanda, Angola</p>
                            </div>
                            <div className="flex flex-row items-center gap-3 mt-4">
                                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-full w-[50px] h-[50px] flex justify-center items-center text-white text-xl">
                                    <FaPhone />
                                </div>
                                <p>(+244) 931 251 965</p>
                            </div>
                        </div>

                        {/* Div de Sombra do Card Principal */}
                        <div className="bg-white opacity-30 w-[450px] h-[450px] mt-[-425px] ml-[25px] z-10"></div>
                    </div>

                    <div className="w-[600px] p-6 flex flex-col gap-14">
                        <input type="text" placeholder="Nome" className="bg-transparent border-b p-1 outline-none text-base text-white w-full placeholder:text-white focus:bg-transparent" />
                        <div className="flex flex-row gap-6">
                            <input type="email" placeholder="Email" className="bg-transparent border-b p-1 outline-none text-base text-white w-full placeholder:text-white focus:bg-transparent" />
                            <input type="text" placeholder="Telefone" className="bg-transparent border-b p-1 outline-none text-base text-white w-full placeholder:text-white focus:bg-transparent" />
                        </div>
                        <textarea name="message" id="message" cols={30} rows={6} placeholder="Digite a sua Mensagem" className="bg-transparent border-b w-full text-white text-base outline-none placeholder:text-white"></textarea>
                        <div className="w-full mt-[-30px]">
                            <button className="flex flex-row items-center gap-1 text-red-600 bg-white p-4 px-6 rounded-md">
                                <p className="font-medium">Enviar Mensagem</p>
                                <IoIosSend />
                            </button>
                        </div>
                    </div>
                </div>
            </Container>

        </Layout>
    )
}