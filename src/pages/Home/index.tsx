import Layout from "../../layout";
import { WhatWeDo } from "../../components/homePage/whatWeDo";
import { OurWhy } from "../../components/homePage/ourWhy";
import ImageCarousel from "../../components/Carousel";
import { Helmet } from "react-helmet";
import { Gallery } from "../../components/homePage/Gallery";

export default function HomePage() {
    return (
        <>
            <Helmet>
            {
                    /* <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>B.ALFA - Consultória & Investimentos, LDA- Contacto</title>
                <meta name="description" content="A B.Alfa Consultoria e Investimentos é um grupo que actua nas áreas, da economia, finanças, agricultura, pescas e pecuária." />
                <meta name="keywords" content="B.Alfa, Consultoria, investimento, marketing, design" />
                <meta name="robots" content="home, sobre, contacto, agro" />
                <link rel="canonical" href="https://www.balfaa.com/" />
                {/* <!-- Tags Open Graph para redes sociais --> 
                <meta property="og:title" content="B.ALFA - Consultória & Investimentos, LDA- Contacto" />
                <meta property="og:description" content="A B.Alfa Consultoria e Investimentos é um grupo que actua nas áreas, da economia, finanças, agricultura, pescas e pecuária." />
                <meta property="og:image" content="https://www.balfaa.com/assets/Ativo%2025-ylsEE4mT.svg" />
                <meta property="og:facebook" content="https://www.facebook.com/people/B-Alfa/61556553600172/" />
                <meta property="og:instagram" content="https://www.instagram.com/balfa_invest_e_consultoria_/" />*/
                }
            </Helmet>
            <Layout>
                <div className="w-full">
                    <ImageCarousel />
                </div>
                <OurWhy />
                <WhatWeDo />
                <Gallery />
            </Layout>

        </>
    )
}