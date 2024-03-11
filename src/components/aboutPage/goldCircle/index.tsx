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
            <div className="flex flex-row flex-wrap gap-5 justify-around text-justify pb-20">
                <div className="flex flex-col gap-3 w-[40%] max-lg:w-full">
                    <h1 className="text-2xl font-bold">Missão!!</h1>
                    <p className="text-sm text-gray-600">Por meio da experiência e conhecimento técnico, contribuir para a melhoria da performance e dos resultados dos nossos clientes.</p>

                    <h1 className="text-2xl font-bold mt-10">Visão!!</h1>
                    <p className="text-sm text-gray-600">Ser um parceiro válido para pequenos e médios empreendedores.</p>

                    <h1 className="text-2xl font-bold mt-10">Valores!!</h1>
                    <p className="text-sm text-gray-600">Satisfação do Cliente.</p>
                    <p className="text-sm text-gray-600">Honestidade e integridade.</p>
                    <p className="text-sm text-gray-600">Compromisso.</p>
                    <p className="text-sm text-gray-600">Trabalho em equipa.</p>
                </div>

                <div className="w-[30%] flex flex-col flex-wrap gap-5 items-center max-lg:w-[70%] max-lg:mt-5">
                    <img src={Image} alt="Why, How, What" className="w-[80%]" />
                    <p className="text-xl font-medium text-center">Círculo Dourado de Simon Sinek</p>
                </div>
            </div>
        </Container>
    )
}