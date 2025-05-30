import Container from "../../share/container"
import { GoDotFill } from "react-icons/go";

export function Service() {
    return (
        <Container>
            <div className="w-full pt-16 flex flex-col justify-start items-center gap-2 relative xl:h-[800px]">
                <div className="section-titles flex flex-row gap-3 items-center">
                    <GoDotFill className="text-2xl text-red-600" />
                    <h1 className="text-4xl font-bold section-titles">ATENDIMENTO </h1>
                    <h1 className="text-4xl font-bold text-red-600 section-titles">PERSONALIZADO</h1>
                    <GoDotFill className="text-2xl text-red-600" />
                </div>
                <p className="w-[750px] text-center text-lg service-description">Na <b>B.ALFA</b> você conta com Soluções Diferenciadas e Personalizadas com foco na sua real necessidade para aumentar a sua produtividade e rentabilidade.</p>
                <h1 className="text-2xl text-center font-medium mt-4 text-red-600 section-titles">CONFIRA COMO FUNCIONA O NOSSO ATENDIMENTO:</h1>
                <div className="section-service flex flex-row justify-between w-full mt-10 ">

                    <div data-aos="zoom-in" data-aos-delay="100" className="order-1 max-md:w-full w-[300px] xl:w-[350px] xl:absolute xl:left-0 p-7 h-28 bg-red-600 rounded-tr-[50px] rounded-bl-[50px] flex flex-row gap-2 justify-start items-center">
                        <h1 className="text-7xl font-medium text-white opacity-60">1º</h1>
                        <p className="text-white ">Entendemos qual é o seu negócio e a sua linha de atuação;</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="200" className="order-2 max-md:w-full w-[300px] xl:w-[400px] xl:absolute xl:left-[15%] lg:mt-36 p-7 h-28 bg-red-600 rounded-tr-[50px] rounded-bl-[50px] flex flex-row gap-2 justify-start items-center">
                        <h1 className="text-7xl font-medium text-white opacity-60">2º</h1>
                        <p className="text-white ">Compreendemos a sua demanda;</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="300" className="order-3 max-md:w-full w-[300px] xl:w-[350px] xl:absolute xl:left-[37%] p-7 h-28 bg-red-600 rounded-tr-[50px] rounded-bl-[50px] flex flex-row gap-2 justify-start items-center">
                        <h1 className="text-7xl font-medium text-white opacity-60">3º</h1>
                        <p className="text-white ">Levantamos as melhores opções de financiamento de acordo com o critério de cada banco;</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="400" className="order-4 max-md:w-full w-[300px] xl:w-[400px] xl:absolute xl:right-[15%] lg:mt-36 p-7 h-28 bg-red-600 rounded-tr-[50px] rounded-bl-[50px] flex flex-row gap-2 justify-start items-center">
                        <h1 className="text-7xl font-medium text-white opacity-60">4º</h1>
                        <p className="text-white ">Elaboramos o projeto para realizar o financiamento e as operações de crédito;</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="500" className="order-5 max-md:w-full w-[300px] xl:w-[350px] xl:absolute xl:right-0 p-7 h-28 bg-red-600 rounded-tr-[50px] rounded-bl-[50px] flex flex-row gap-2 justify-start items-center">
                        <h1 className="text-7xl font-medium text-white opacity-60">5º</h1>
                        <p className="text-white ">Realizamos o acompanhamento com uma equipe altamente especializada;</p>
                    </div>

                </div>
                <div className="w-full text-center xl:mt-72">
                    <h1 className="text-2xl w-full text-center font-bold text-red-600 service-description">NOSSO DOM É SERVIR PARA O SEU RESULTADO.</h1>
                </div>
            </div>
        </Container>
    )
}