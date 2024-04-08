import Layout from "../../layout";
import { WhatWeDo } from "../../components/homePage/whatWeDo";
import { OurWhy } from "../../components/homePage/ourWhy";
import { Service } from "../../components/homePage/service";
import { Partners } from "../../components/share/partners";
import { Partner } from "../../components/share/partner";
import ImageCarousel from "../../components/Carousel";
import { Helmet } from "react-helmet";

export default function HomePage() {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>B.ALFA - Consultória & Investimentos, LDA</title>
                <meta name="description" content="A B.Alfa Consultoria e Investimentos é um grupo que actua nas áreas, da economia, finanças, agricultura, pescas e pecuária." />
                <meta name="keywords" content="B.Alfa, balfa, balfaa, b-alfa, Consultoria, investimento, marketing, design" />
                <meta name="robots" content="home, sobre, contacto, agro" />
                <link rel="canonical" href="https://www.balfaa.com/" />
                {/* <!-- Tags Open Graph para redes sociais --> */}
                <meta property="og:title" content="B.ALFA - Consultória & Investimentos, LDA" />
                <meta property="og:description" content="A B.Alfa Consultoria e Investimentos é um grupo que actua nas áreas, da economia, finanças, agricultura, pescas e pecuária." />
                <meta property="og:image" content="https://www.balfaa.com/assets/Ativo%2025-ylsEE4mT.svg" />
                <meta name="google-site-verification" content="UJ0KdUodaXHRbbmNztKcPokmeZmLHy4P4UKg6bhxFoU" />
            </Helmet>
            <Layout>
                <div className="w-full">
                    <ImageCarousel />
                </div>
                <OurWhy />
                <WhatWeDo />
                <div className="service w-full bg-gradient-to-r from-[#EDF5FF] to-[#CCDFF7] mt-10">
                    <Service />
                </div>
                <Partner page="partner" title="Inovando hoje para liderar amanhã." content="Na B.ALFA, unimos consultoria estratégica, liderança visionária e soluções de financiamento inovadoras para impulsionar o sucesso de nossos clientes hoje e liderar os negócios do amanhã" />
                <Partners />
            </Layout>

        </>
    )
}