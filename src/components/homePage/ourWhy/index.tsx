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
                    <p className="text-gray-700 text-base mt-5 text-justify">Bem-vindo ao Ocean Boutique Hotel, um refúgio exclusivo e sofisticado à beira-mar, reservado para adultos que buscam uma experiência única. Localizado nas deslumbrantes praias de Luanda, com vista privilegiada para as águas cristalinas das nossas praias, nosso hotel oferece quartos luxuosos e confortáveis, projetados para proporcionar uma escapada tropical inesquecível.

                       Bem-vindo ao Ocean Boutique Hotel, um refúgio exclusivo e sofisticado à beira-mar, reservado para adultos que desejam uma experiência única. Situado nas encantadoras praias de Luanda, nosso hotel oferece quartos luxuosos e confortáveis, pensados para proporcionar uma escapada tropical inesquecível.

Relaxe nas espreguiçadeiras à sombra de palmeiras, sentindo a brisa suave e ouvindo o som tranquilo das ondas. Caminhe pelas areias douradas, aproveite um banho revigorante nas águas calmas das praias locais e deixe-se envolver pela serenidade do ambiente.

Para tornar a sua estadia ainda mais especial, saboreie um coquetel exclusivo preparado na hora, enquanto aprecia o pôr do sol em nosso elegante lounge à beira-mar — o cenário perfeito para momentos de tranquilidade, romance e puro prazer.

</p>
 
                </div>
            </div>
        </Container>
    )
}