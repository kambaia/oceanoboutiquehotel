import Container from "../../share/container";

import { WeDoCards } from "./Cards"
import { FaChartLine, FaChess } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineAttachMoney } from "react-icons/md";

export function WhatWeDo() {
    return (
        <Container>
            <div className="">
                <div className="w-full flex flex-col items-center justify-center pt-20 pb-20 text-xl gap-2">
                    <h2 className="text-blue-600">O QUE FAZEMOS</h2>
                    <h1 className="text-4xl font-medium">As Nossas Soluções</h1>
                    <p className="w-[100px] border-b-2 border-blue-500"></p>
                </div>


                <div className="w-full flex flex-row flex-wrap gap-10 justify-between items-center pb-20">
                    
                    <div className="max-w-[500px] flex flex-col ">
                        <h2 className="text-2xl font-bold text-blue-600">A NOSSA ESPECIALIDADE</h2>
                        <h1 className="text-5xl font-medium">Desenvolvemos e implementamos soluções para os problemas de líderes e organizações de vários setores de atividade.</h1>
                    </div>

                    <div className="w-[600px] flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-between text-lg font-medium">
                                <p>Cultura Organizacional E Liderança</p>
                                <p>98%</p>
                            </div>
                            <p className="w-[98%] border-b-4 border-blue-600 rounded-full"></p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-between text-lg font-medium">
                                <p>Consultoria E Controlo De Gestão</p>
                                <p>95%</p>
                            </div>
                            <p className="w-[95%] border-b-4 border-blue-600 rounded-full"></p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-between text-lg font-medium">
                                <p>Assessoria Financeira</p>
                                <p>97%</p>
                            </div>
                            <p className="w-[97%] border-b-4 border-blue-600 rounded-full"></p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-between text-lg font-medium">
                                <p>Planeamento Estratégico E Aceleração De Negócios</p>
                                <p>91%</p>
                            </div>
                            <p className="w-[91%] border-b-4 border-blue-600 rounded-full"></p>
                        </div>
                    </div>

                </div>
 
                <div className="pt-10 pb-10 flex flex-row flex-wrap gap-5 justify-between">
                    <WeDoCards solution="solution-card1" icon={<FaChartLine className="w-full text-4xl text-center text-blue-600" />} title="CONSULTORIA E CONTROLO DE GESTÃO" description="Apoiamos na gestão do seu negócio de forma transversal, com vista a garantir uma melhor performance estratégica, operacional e financeira." />
                    <WeDoCards solution="solution-card2" icon={<FaChess className="w-full text-4xl text-center text-blue-600" />} title="CORPORATE FINANCE" description="Ajudamos na expansão de negócios, empresas e grupos empresariais, tanto via fusões, reestruturações e aquisições, como através de internacionalização e/ou franchising." />
                    <WeDoCards solution="solution-card3" icon={<IoIosPeople className="w-full text-4xl text-center text-blue-600" />} title="CULTURA E LIDERANÇA" description="Apoiamos líderes e organizações a criar, reestruturar e/ou implementar melhores culturas organizacionais e modelos de liderança que permitem maximizar a performance e resultados." />
                    <WeDoCards solution="solution-card4" icon={<MdOutlineAttachMoney className="w-full text-4xl text-center text-blue-600" />} title="APOIOS E INCENTIVOS FINANCEIROS E FISCAIS" description="Apoio completo na obtenção de financiamento de várias fontes e em todas as fases do ciclo de vida das empresas e organizações." />
                </div>
            </div>
        </Container>
    )
}