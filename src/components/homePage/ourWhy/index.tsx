import Container from "../../share/container";

export function OurWhy() {
    return (
        <Container>
            <div className="our-why w-full flex flex-row justify-around py-20 ">

                <div className="macro-image w-[60%] h-[600px]" data-aos="fade-left">
                    <div className="macro w-[600px] h-full absolute ">
                        <p className=" transform -rotate-90 transform-origin-left-bottom whitespace-nowrap font-bold text-[200px] absolute mt-[150px] ml-[-270px] opacity-55 text-[#BDD8FA]">Macro</p>
                    </div>
                </div>

                <div className="macro-content w-[40%] flex flex-col gap-1 justify-center" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                    <h3 className="section-titles text-red-600 text-lg font-medium">O NOSSO PORQUÊ</h3>
                    <h1 className="section-description font-medium text-4xl">Consultoria e Investimentos: Impulsionando o Crescimento em Angola.</h1>
                    <p className=" text-gray-700 text-base mt-5">A B.Alfa  investimentos e consultoria  é uma empresa de consultoria  e investimentos , com competências nos domínios da economia ,agricultura , pescas e pecuária .</p>
                    <p className="text-gray-700 text-base mt-3">É empresa uma multidisciplinar  de especialistas com ekpertase nos  domínios da economia , finanças, gestão de projectos, estão de empresas, agricultura, pesca , pecuaária  . Este conjunto de  know how faz da B.Alfa um centro de conhecimento de apoio à negócios importante. </p>
                    <p className="text-gray-700 text-base mt-3">Num momento actual em que todas economias do mundo vivem incertezas , o mercado Angolano tem desafios de crescimento e divercificação da sua  economia . Esses desafios passam essencialmente pela consolidação do técido empresarial.</p>
                    <p className="text-gray-700 text-base mt-3">Com uma equipa de  consultores com uma elevada qualificação técnica e uma forte experiência profissional a actividade de consultoria do grupo está voltada às micro, pequenas, médias empresas e à investidores extrangeiros com interesses de estabelecer negócios no mercado Angolano.</p>
                </div>
            </div>
        </Container>
    )
}