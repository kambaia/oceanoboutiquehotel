import Container from "../../share/container";
import { WeDoCards } from "./Cards"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export function WhatWeDo() {
   
    return (
        <Container>
            <div className="">

                <div className="w-full flex flex-col items-center justify-center pt-20 pb-20 text-xl gap-2" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="text-red-600 text-center">O QUE FAZEMOS</h2>
                    <h1 className="text-4xl font-medium text-center">As Nossas Soluções</h1>
                    <p className="w-[100px] border-b-2 border-red-600"></p>
                </div>

                <div className="w-full flex flex-row flex-wrap gap-10 justify-between items-center pb-20" >

                    <div className="max-w-[500px] flex flex-col " data-aos="fade-up" data-aos-delay="500">
                        <h2 className="section-titles text-2xl font-bold text-red-600">A NOSSA ESPECIALIDADE</h2>
                        <h1 className="section-description text-5xl font-medium">Desenvolvemos e implementamos soluções para os problemas de líderes e organizações de vários setores de atividade.</h1>
                    </div>

                    <div className="w-[600px] flex flex-col gap-10" data-aos="fade-up" data-aos-delay="800">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-between text-lg font-medium">
                                <p>Cultura Organizacional E Liderança</p>
                                <p>98%</p>
                            </div>
                            <p className="w-[98%] border-b-4 border-red-600 rounded-full"></p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-between text-lg font-medium">
                                <p>Consultoria E Controlo De Gestão</p>
                                <p>95%</p>
                            </div>
                            <p className="w-[95%] border-b-4 border-red-600 rounded-full"></p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-between text-lg font-medium">
                                <p>Assessoria Financeira</p>
                                <p>97%</p>
                            </div>
                            <p className="w-[97%] border-b-4 border-red-600 rounded-full"></p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-between text-lg font-medium">
                                <p>Planeamento Estratégico E Aceleração De Negócios</p>
                                <p>91%</p>
                            </div>
                            <p className="w-[91%] border-b-4 border-red-600 rounded-full"></p>
                        </div>
                    </div>

                </div>

              
                       
                            <WeDoCards />
                 
             
            </div>
        </Container>
    )
}