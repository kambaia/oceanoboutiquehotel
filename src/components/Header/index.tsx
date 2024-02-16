import { FaLocationDot } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


import Container from "../share/container";

export default function Header() {
    return (
        <div className="w-full h-[50px] bg-deep-gray text-white flex ">
            <Container>
                <div className="flex flex-row justify-between items-center">

                    <div className="flex flex-row gap-5">
                        <div className="flex flex-row gap-2 justify-between items-center ">
                            <FaLocationDot />
                            <p>Via Expressa,Luanda, Angola</p>
                        </div>


                        <div className="flex flex-row gap-2 justify-start items-center  pl-5 border-l">
                            <IoMdMailOpen />
                            <p>geral@grupoboavida.co.ao</p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-6 justify-between items-center ">
                        <div className="flex flex-row gap-1 justify-between items-center">
                            <MdAccessTimeFilled />
                            <p>Horário: 09:00 – 18:00</p>
                        </div> 
                        <div className="flex flex-row gap-3 justify-between items-center text-lg pl-5 border-l">
                            <FaFacebookF />
                            <FaInstagram />
                            <FaLinkedinIn />
                        </div>
                    </div>


                </div>
            </Container>
        </div>
    )
}