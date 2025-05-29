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
                    <p className="text-gray-700 text-base mt-5 text-justify">Bem-vindo ao Ocean Boutique Hotel, um refúgio exclusivo e sofisticado à beira-mar, reservado para adultos que buscam uma experiência única. Localizado nas deslumbrantes praias de Luanda, com vista privilegiada para as águas cristalinas do Oceano Atlântico, nosso hotel oferece quartos luxuosos e confortáveis, projetados para proporcionar uma escapada tropical inesquecível.

                        Desfrute do encanto das areias douradas e das águas mornas, perfeitas para um mergulho relaxante. Aproveite a serenidade das palmeiras que oferecem sombra refrescante, enquanto se relaxa à beira de nossa piscina privativa, em um deck elevado com vista para o mar. Complete a experiência com um coquetel exclusivo, preparado na hora, enquanto se acomoda em espreguiçadeiras luxuosas, cercado pelo ambiente perfeito para momentos de tranquilidade e prazer..</p>
 
                </div>
            </div>
        </Container>
    )
}