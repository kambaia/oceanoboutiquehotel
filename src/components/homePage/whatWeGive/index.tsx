import Container from "../../share/container"

import { CardWeGive } from "./Card"
import { FaPiggyBank, FaChartBar, FaRocket, FaChartArea, FaChess, FaEuroSign, FaBuilding, FaDatabase } from "react-icons/fa6"

export function WhatWeGive() {
    return (
        <Container>
            <div className="w-full pb-32">
                <div className="w-full flex flex-col text-center items-center justify-center pt-20 pb-20 text-xl gap-2">
                    <h2 className="text-blue-600">O QUE ENTREGAMOS</h2>
                    <h1 className="text-4xl font-medium">Algumas das nossas Soluções</h1>
                    <p className="w-[100px] border-b-2   border-blue-500"></p>
                </div>
                <div className="flex flex-row justify-center flex-wrap gap-5">
                    <CardWeGive order="01" title="Assessoria Financeira" description="Apoio na gestão financeira, redução de custos de financiamento, otimização contabilística, financeira e fiscal e apoio ao nível das decisões de investimento." icon={<FaPiggyBank className="w-full text-5xl text-center text-white" />} />
                    <CardWeGive order="02" title="Avaliação de Empresas e Negócios" description="Determinação do valor de empresas, negócios ou partes de capital numa ótica de fusões, aquisições e reestruturações de capital." icon={<FaChartBar className="w-full text-5xl text-center text-white" />} />
                    <CardWeGive order="03" title="Capital de Risco" description="Captação de investimento por parte de investidores particulares, institucionais e empresas de capital de risco (Ex: Portugal Ventures, Caixa Capital, entre outras)." icon={<FaRocket className="w-full text-5xl text-center text-white" />} />
                    <CardWeGive order="04" title="Estudos de Viabilidade" description="Análise financeira a investimentos e negócios e avaliação da viabilidade económico-financeira dos mesmos segundo vários modelos de avaliação (neotradicionais e opções reais)." icon={<FaChartArea className="w-full text-5xl text-center text-white" />} />
                    <CardWeGive order="05" title="Estratégia e Governance" description="Análise e planeamento estratégico, definição de objetivos específicos e implementação de planos de ação alinhados com a estratégia." icon={<FaChess className="w-full text-5xl text-center text-white" />} />
                    <CardWeGive order="06" title="Fundos comunitários" description="Elaboração de candidaturas a fundos comunitários (Ex: Portugal 2030) bem como acompanhamento das mesmas ao longo da sua execução." icon={<FaEuroSign className="w-full text-5xl text-center text-white" />} />
                    <CardWeGive order="07" title="Fusões e Aquisições" description="Assessoria a processos de expansão de empresas e grupos por via de fusões e aquisições de negócios e partes de capital." icon={<FaBuilding className="w-full text-5xl text-center text-white" />} />
                    <CardWeGive order="08" title="Linhas de financiamento" description="Candidatura e negociação de financiamento para PME para investimento, reforço de tesouraria, renegociação de créditos e consolidação de dívidas." icon={<FaDatabase className="w-full text-5xl text-center text-white" />} />
                </div>
            </div>
        </Container>
    )
}