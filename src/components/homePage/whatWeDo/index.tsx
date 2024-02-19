import Container from "../../share/container";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

import { WeDoCards } from "./Cards"
import Image1 from '../../../assets/Solutions/Card/solution1.jpg'
import Image2 from '../../../assets/Solutions/Card/solution2.jpg'
import Image3 from '../../../assets/Solutions/Card/solution3.jpg'
import Image4 from '../../../assets/Solutions/Card/solution4.jpg'

export function WhatWeDo() {
    return (
        <Container>
            <div className="">
                
                <div className="w-full flex flex-col items-center justify-center pt-20 pb-20 text-xl gap-2" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="text-red-600">O QUE FAZEMOS</h2>
                    <h1 className="text-4xl font-medium">As Nossas Soluções</h1>
                    <p className="w-[100px] border-b-2 border-red-600"></p>
                </div>


                <div className="w-full flex flex-row flex-wrap gap-10 justify-between items-center pb-20" >
                    
                    <div className="max-w-[500px] flex flex-col " data-aos="fade-up" data-aos-delay="500">
                        <h2 className="text-2xl font-bold text-red-600">A NOSSA ESPECIALIDADE</h2>
                        <h1 className="text-5xl font-medium">Desenvolvemos e implementamos soluções para os problemas de líderes e organizações de vários setores de atividade.</h1>
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
 
                <div className="pt-10 pb-10 flex flex-row gap-3 justify-between">
                    <WeDoCards image={Image1} title="Estudos Financeiros e Análise de Viabilidade" description="Analisamos o potencial do seu negócio ou ideia, prestando serviços de aconselhamento estratégico que representam uma importante mais valia na alavancagem de um negócio." />
                    <WeDoCards image={Image2} title="Planos de Marketing e Estudos de Mercado" description="Por forma a garantir que atingirá o seu público-alvo da forma mais rentável e eficiente, é essencial o investimento num forte e estruturado plano de comunicação e de marketing..." />
                    <WeDoCards image={Image3} title="Aconselhamento técnico na agricultura" description="Para garantir que o produtor agricola tenha sucesso e alta produtividade prestamos apoio técnico agricola na produção de leguminosas, frutas e hortaliças." />
                    <WeDoCards image={Image4} title="Avaliação de empresas e negócios" description="A avaliação de empresas e negócios consiste no processo usado para determinar o valor de uma entidade ou negócio, com o intuito de exercer uma atividade económica. " />
                </div>
            </div>
        </Container>
    )
}