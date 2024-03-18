import Container from "../../share/container";

export function OurWhy() {
    return (
        <Container>
            <div className="our-why w-full flex flex-row justify-around py-20 ">

                <div className="macro-image w-[60%] h-[600px]" data-aos="fade-down">
                    <div className="macro w-[600px] h-full absolute ">
                        <p className=" transform -rotate-90 transform-origin-left-bottom whitespace-nowrap font-bold text-[200px] absolute mt-[150px] ml-[-270px] opacity-55 text-[#BDD8FA]">Macro</p>
                    </div>
                </div>

                <div className="macro-content w-[40%] flex flex-col gap-1 justify-center" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
                    <h3 className="section-titles text-red-600 text-lg font-medium">O NOSSO PORQUÊ</h3>
                    <h1 className="section-description font-medium text-4xl">Consultoria e Investimentos: Impulsionando o Crescimento em Angola.</h1>
                    <p className=" text-gray-700 text-base mt-5 text-justify">A B.Alfa  Consultoria e Investimentos é um grupo  que actua nas áreas, da  economia, finanças, agricultura, pescas e pecuária.</p>
                    <p className="text-gray-700 text-base mt-3 text-justify">É um grupo diversificado de profissionais com experiência nas áreas de economia, finanças, gestão de projectos, , agronegócio, pesca e pecuária. Esta experiência diversificada faz da B.Alfa um centro de conhecimento e informação fundamental para apoiar as empresas.</p>
                    <p className="text-gray-700 text-base mt-3 text-justify">No contexto actual de instabilidade económica global, a economia Angolana enfrenta desafios de crescimento e diversificação. Estes desafios passam pelo fortalecimento do sector empresarial.</p>
                    <p className="text-gray-700 text-base mt-3 text-justify">Contando com especialistas altamente qualificados e experientes, os serviços de consultoria prestados pelo grupo visam responder às necessidades das micro, pequenas e médias empresas, bem como dos investidores estrangeiros interessados em iniciar um negócio no mercado Angolano.</p>
                </div>
            </div>
        </Container>
    )
}