import Layout from "../../layout";
import { Navbar } from "../../components/Header/Navbar";
import { TopBanner } from "../../components/share/topBanner";
import { AgroWhy } from "../../components/agroPage/agroWhy";
import { AptidaoAgricola } from "../../components/agroPage/aptidaoAgricola";
import { Partner } from "../../components/share/partner";
import { Partners } from "../../components/share/partners";

export default function Agro() {
    return (
        <Layout>
            <div className="w-full bg-white relative">
                <Navbar />
            </div>
            <TopBanner title="Agropecuária" tipo="contact-banner" />
            <AgroWhy />
            <AptidaoAgricola />
            <Partner />
            <Partners />
        </Layout>
    )
}