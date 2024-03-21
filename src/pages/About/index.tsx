import Layout from "../../layout"
import { TopBanner } from "../../components/share/topBanner"
import { Identity } from "../../components/aboutPage/identity"
import { GoldenCircle } from "../../components/aboutPage/goldCircle"
import { Partner } from "../../components/share/partner"
import { Partners } from "../../components/share/partners"
import { Navbar } from "../../components/Header/Navbar"
import { Helmet } from "react-helmet"

export default function AboutPage() {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>B.ALFA - Consultória & Investimentos, LDA- Sobre</title>
                <meta name="description" content="A B.Alfa Consultoria e Investimentos é um grupo que actua nas áreas, da economia, finanças, agricultura, pescas e pecuária." />
                <meta name="keywords" content="B.Alfa, Consultoria, investimento, marketing, design" />
                <meta name="robots" content="home, sobre, contacto, agro" />
                <link rel="canonical" href="https://www.balfaa.com/" />
                {/* <!-- Tags Open Graph para redes sociais --> */}
                <meta property="og:title" content="B.ALFA - Consultória & Investimentos, LDA- Sobre" />
                <meta property="og:description" content="A B.Alfa Consultoria e Investimentos é um grupo que actua nas áreas, da economia, finanças, agricultura, pescas e pecuária." />
                <meta property="og:image" content="https://www.balfaa.com/assets/Ativo%2025-ylsEE4mT.svg" />
                <meta property="og:facebook" content="https://www.facebook.com/people/B-Alfa/61556553600172/" />
                <meta property="og:instagram" content="https://www.instagram.com/balfa_invest_e_consultoria_/" />
            </Helmet>
            <Layout>
                <div className="w-full bg-white relative">
                    <Navbar />
                </div>
                <TopBanner title="Sobre-Nós" tipo="about-banner" />
                <div className="w-full bg-gradient-to-r from-[#EDF5FF] to-[#CCDFF7] py-10">
                    <Identity />
                </div>
                <GoldenCircle />
                <Partner />
                <Partners />
            </Layout>
        </>
    )
}