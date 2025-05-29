import Container from "../../share/container";

export function OurWhy() {
    return (
        <Container>
            <div className="our-why w-full flex flex-col md:flex-row justify-around py-20 gap-8">

                <div className="macro-image w-full md:w-[60%] h-[600px] relative overflow-hidden" data-aos="fade-down">
                    {/* Image container with zoom effect */}
                    <div className="w-[90%] h-full overflow-hidden rounded-lg">
                        <img
                            src="/imagens/OCEANO-01.png"
                            alt="B.Alfa Consultoria"
                            className="w-full h-full object-content transition-transform duration-500 ease-in-out hover:scale-110"
                        />
                    </div>
                </div>

                <div className="macro-content w-full lg:w-[40%] flex flex-col gap-1 justify-center" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200">
                    <h3 className="section-titles text-[#4C96FF] text-lg font-medium">PORQUÊ OCEAN BOUTIQUE HOTEL? </h3>
                    <h1 className="section-description font-medium text-4xl">Ocean Boutique Hotel: Onde o luxo encontra a tranquilidade à beira-mar.</h1>
                    <p className="text-gray-700 text-base mt-5 text-justify">O Oceano Boutique Hotel, localizado na Restinga do Lobito é um espaço acolhedor na primeira linha da praia. Com serviço de alojamento e Pequenos-Almoços, Recepção 24 horas, Internet Wi-Fi gratuita, canais por satélite, Lavandaria, elevador, segurança e uma equipa preparada garantir uma boa estadia.
                    </p>

                </div>
            </div>
        </Container>
    )
}