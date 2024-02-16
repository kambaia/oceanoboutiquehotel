import Container from "../../share/container"

import Image from '../../../assets/why-how-what.png'

export function GoldenCircle() {
    return(
        <Container>
            <div className="w-full flex flex-col items-center justify-center pt-20 pb-20 text-xl gap-2">
                <h2 className="text-blue-600">PORQUÊ, COMO E O QUÊ</h2>
                <h1 className="text-4xl font-medium">Círculo Dourado</h1>
                <p className="w-[100px] border-b-2 border-blue-500"></p>
            </div>
            <div className="flex flex-row gap-5 justify-around text-justify pb-20">
                <div className="flex flex-col gap-3 w-[40%]">
                    <h1 className="text-2xl font-bold">Porquê?</h1>
                    <p className="text-sm text-gray-600">As estatísticas dizem-nos que 9 em cada 10 empresas falham, 50% destas falham nos primeiros 4 anos de atividade, e 82% das empresas que falham, falham devido a problemas de gestão.</p>
                    <p className="text-sm text-gray-600">Acreditamos num futuro em que os líderes, colaboradores e as respetivas organizações atingem o seu máximo potencial não apenas para não contarem para estas estatísticas mas, sobretudo, prosperarem. O nosso propósito passa por contribuir para que líderes e organizações construam um legado positivo e duradouro.</p>

                    <h1 className="text-2xl font-bold mt-10">Como?</h1>
                    <p className="text-sm text-gray-600">Capacitando líderes e organizações para atingirem o seu máximo potencial.</p>

                    <h1 className="text-2xl font-bold mt-10">O quê?</h1>
                    <p className="text-sm text-gray-600">Entregando o nosso melhor através dos serviços especializados nas áreas da “Cultura e Liderança”, “Consultoria e Controlo de Gestão”, “Corporate Finance” e “Apoios e Incentivos Financeiros e Fiscais”.</p>
                </div>

                <div className="w-[30%] flex flex-col flex-wrap gap-5 items-center">
                    <img src={Image} alt="Why, How, What" className="w-[80%]" />
                    <p className="text-xl font-medium">Círculo Dourado de Simon Sinek</p>
                </div>
            </div>
        </Container>
    )
}