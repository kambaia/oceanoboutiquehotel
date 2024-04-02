import Container from "../../share/container";
import Image from '../../../assets/Agro/aptidao-agricola.png'

export function AptidaoAgricola() {
    return (
        <Container>
            <div className="pt-10 pb-20 flex flex-row gap-10 justify-between items-center flex-wrap">
                <div className="flex flex-col w-[650px]">
                    <h2 className="text-lg text-red-600 font-medium uppercase">Porque a agricultura é o negócio do Século?</h2>
                    <h2 className="text-4xl text-black font-medium pb-4">Um oceano azul de possibilidades em milhões de hectares!</h2>
                    <p className="text-justify">A agricultura tem sido amplamente reconhecida como o negócio do século por uma série de razões que vão desde a segurança alimentar até o crescimento econômico e a sustentabilidade ambiental. Enquanto isso, a expressão "um oceano azul de possibilidades em milhões de hectares" evoca a vastidão das oportunidades ainda não exploradas na agricultura, especialmente em termos de inovação, tecnologia e expansão dos limites tradicionais da produção agrícola.</p>
                    <p className="text-justify mt-3">Primeiramente, a agricultura desempenha um papel fundamental na garantia da segurança alimentar global. Com uma população mundial em crescimento constante, estimada para alcançar 9,7 bilhões até 2050, a demanda por alimentos está aumentando exponencialmente. Isso cria uma enorme oportunidade para os negócios agrícolas atenderem a essa crescente demanda, tanto em termos de quantidade quanto de diversidade de alimentos.</p>
                </div>
                <div className="w-[600px]">
                    <img src={Image} alt="Imagem" className="w-[95%]" />
                </div>
            </div>
        </Container>
    )
}