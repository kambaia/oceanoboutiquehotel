import Container from "../../share/container"

import { GoDotFill } from "react-icons/go";

export function Service() {
    return (
        <Container>
            <div className="w-full py-16 flex flex-col justify-center items-center gap-2">
                <div className="flex flex-row gap-3 items-center">
                    <GoDotFill className="text-2xl text-red-600" />
                    <h1 className="text-4xl font-bold">ATENDIMENTO </h1>
                    <h1 className="text-4xl font-bold text-red-600">PERSONALIZADO</h1>
                    <GoDotFill className="text-2xl text-red-600" />
                </div>
                <p className="w-[750px] text-center text-lg">Na <b>B.ALFA</b> você conta com Soluções Diferenciadas e Personalizadas com foco na sua real necessidade para aumentar a sua produtividade e rentabilidade.</p>
                <h1 className="text-2xl font-medium mt-4 text-red-600">CONFIRA COMO FUNCIONA O NOSSO ATENDIMENTO:</h1>
                <div className="flex flex-row justify-between w-full mt-10">
                    <div className="w-[320px] p-7 h-28 bg-red-600 rounded-tr-[50px] rounded-bl-[50px] flex flex-row gap-2 justify-start items-center">
                        <h1 className="text-7xl font-medium text-white opacity-60">1º</h1>
                        <p className="text-white ">Entendemos qual é o seu negócio e a sua linha de atuação;</p>
                    </div>
                    <div className="w-[320px] p-7 h-28 bg-red-600 rounded-tr-[50px] rounded-bl-[50px] flex flex-row gap-2 justify-start items-center">
                        <h1 className="text-7xl font-medium text-white opacity-60">3º</h1>
                        <p className="text-white ">Levantamos as melhores opções de financiamento de acordo com o critério de cada banco;</p>
                    </div>
                    <div className="w-[320px] p-7 h-28 bg-red-600 rounded-tr-[50px] rounded-bl-[50px] flex flex-row gap-2 justify-start items-center">
                        <h1 className="text-7xl font-medium text-white opacity-60">5º</h1>
                        <p className="text-white ">Realizamos o acompanhamento com uma equipe altamente especializada;</p>
                    </div>
                </div>
                <div className="flex flex-row justify-center gap-48 w-full mt-10">
                    <div className="w-[320px] p-7 h-28 bg-red-600 rounded-tr-[50px] rounded-bl-[50px] flex flex-row gap-2 justify-start items-center">
                        <h1 className="text-7xl font-medium text-white opacity-60">2º</h1>
                        <p className="text-white ">Compreendemos a sua demanda;</p>
                    </div>
                    <div className="w-[320px] p-7 h-28 bg-red-600 rounded-tr-[50px] rounded-bl-[50px] flex flex-row gap-2 justify-start items-center">
                        <h1 className="text-7xl font-medium text-white opacity-60">4º</h1>
                        <p className="text-white ">Elaboramos o projeto para realizar o financiamento e as operações de crédito;</p>
                    </div>
                </div>
                <div className="flex flex-col gap-8  w-[600px]  mt-10">
                    <p className="text-lg text-center">Somos um dos melhores escritórios de Consultoria e Assessoria Financeira.</p>
                    <h1 className="text-2xl text-center font-bold text-red-600">O SEU RESULTADO É A NOSSA MISSÃO!<br/> 100% DOS NOSSOS PROJETOS SÃO APROVADOS.</h1>
                </div>
            </div>
        </Container>
    )
}