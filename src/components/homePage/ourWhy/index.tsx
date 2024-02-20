import { GiLaurelsTrophy } from "react-icons/gi";
import Container from "../../share/container";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

export function OurWhy() {
    return (
        <Container>
            <div className="our-why w-full flex flex-row justify-around" >

                <div className="macro-image w-[60%] h-[600px]" data-aos="fade-left">
                    <div className="macro w-[600px] h-full absolute ">
                        <p className=" transform -rotate-90 transform-origin-left-bottom whitespace-nowrap font-bold text-[200px] absolute mt-[150px] ml-[-270px] opacity-55 text-[#BDD8FA]">Macro</p>
                    </div>
                </div>

                <div className="macro-content w-[40%] mt-20 flex flex-col gap-1" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                    <h3 className="section-titles text-red-600 text-lg font-medium">O NOSSO PORQUÊ</h3>
                    <h1 className="section-description font-medium text-4xl">Criar valor para Pessoas, Organizações e Sociedade.</h1>
                    <p className=" text-gray-700 text-base mt-8">Acreditamos num futuro em que os líderes, colaboradores e as respetivas organizações atingem o seu máximo potencial para fazerem com que as suas organizações e pessoas possam prosperar. O nosso propósito passa por contribuir para que líderes e organizações construam um legado positivo e duradouro.</p>
                    <div className="w-full flex flex-row justify-around items-center h-[100px]">
                        <GiLaurelsTrophy className="text-7xl text-red-600" />
                        <h2 className="font-bold text-xl border-l-2 h-[70px] flex items-center pl-4">Empowering Leaders and Organizations</h2>
                    </div>
                </div>
            </div>
        </Container>
    )
}