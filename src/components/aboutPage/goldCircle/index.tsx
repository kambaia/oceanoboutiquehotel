import Container from "../../share/container"

import Image from '../../../assets/why-how-what.png'

export function GoldenCircle() {
    return(
        <Container>
            <div className="w-full flex flex-col items-center justify-center pt-20 pb-20 text-xl gap-2">
                <h2 className="text-red-600">PORQUÊ, COMO E O QUÊ</h2>
                <h1 className="text-4xl font-medium">Círculo Dourado</h1>
                <p className="w-[100px] border-b-2 border-red-500"></p>
            </div>
            <div className="flex flex-row gap-5 justify-around text-justify pb-20">
                <div className="flex flex-col gap-3 w-[40%]">
                    <h1 className="text-2xl font-bold">Missão!!</h1>
                    <p className="text-sm text-gray-600">Por meio de uma sólida base de experiência e profundo conhecimento técnico, almejamos ser agentes de transformação para aprimorar significativamente a performance e os resultados alcançados pelos nossos clientes. Acreditamos que a combinação entre a expertise acumulada ao longo dos anos e a compreensão aprofundada das intricadas nuances de cada desafio nos capacita a oferecer soluções personalizadas e inovadoras.</p>

                    <h1 className="text-2xl font-bold mt-10">Visão!!</h1>
                    <p className="text-sm text-gray-600">Comprometemo-nos a ser um parceiro inestimável para pequenos e médios empreendedores, reconhecendo a importância vital que desempenham na economia e na comunidade empresarial. Entendemos os desafios únicos que os empreendedores enfrentam, e é com esse entendimento que buscamos oferecer suporte abrangente e soluções personalizadas para impulsionar o crescimento e o sucesso de seus negócios.</p>

                    <h1 className="text-2xl font-bold mt-10">Valores!!</h1>
                    <p className="text-sm text-gray-600">Na essência de nossa filosofia empresarial, colocamos a satisfação do cliente como a pedra angular de todas as nossas ações. Acreditamos que a verdadeira medida de nosso sucesso reside na satisfação plena daqueles a quem servimos. Nossa abordagem é enraizada na transparência, honestidade e integridade, garantindo que cada interação seja permeada por valores éticos.</p>
                    <p className="text-sm text-gray-600">O trabalho em equipe é a espinha dorsal de nossa abordagem operacional. Reconhecemos que a colaboração eficaz entre nossos membros é essencial para alcançar resultados notáveis. </p>
                    <p className="text-sm text-gray-600">A integração harmoniosa desses princípios - satisfação do cliente, honestidade e integridade, compromisso e trabalho em equipe - não apenas molda nossa cultura organizacional, mas também define a qualidade de nossas relações com clientes, colaboradores e parceiros. </p>
                </div>

                <div className="w-[30%] flex flex-col flex-wrap gap-5 items-center">
                    <img src={Image} alt="Why, How, What" className="w-[80%]" />
                    <p className="text-xl font-medium">Círculo Dourado de Simon Sinek</p>
                </div>
            </div>
        </Container>
    )
}