import Layout from "../../layout"
import { TopBanner } from "../../components/share/topBanner"
import { Identity } from "../../components/aboutPage/identity"
import { GoldenCircle } from "../../components/aboutPage/goldCircle"
import { Partner } from "../../components/share/partner"
import { Partners } from "../../components/share/partners"
import { Navbar } from "../../components/Header/Navbar"

export default function AboutPage() {
    return (
        <Layout>
            <Navbar />
            <TopBanner title="Sobre-Nós" tipo="about-banner" />
            <div className="w-full bg-gradient-to-r from-[#EDF5FF] to-[#CCDFF7] py-10">
                <Identity />
            </div>
            <GoldenCircle />
            <Partner />
            <Partners />
        </Layout>
    )
}