import Layout from "../../layout";
import { Navbar } from "../../components/Header/Navbar";
import { TopBanner } from "../../components/share/topBanner";
import { AgroWhy } from "../../components/agroPage/agroWhy";
import { AptidaoAgricola } from "../../components/agroPage/aptidaoAgricola";
import { Partner } from "../../components/share/partner";
import { Partners } from "../../components/share/partners";
import { AgroServices } from "../../components/agroPage/agroServices";

export default function Agro() {
    return (
        <Layout>
            <div className="w-full bg-white relative">
                <Navbar />
            </div>
            <TopBanner title="Agropecuária" tipo="agro-banner" />
            <AgroWhy />
            <AgroServices />
            <AptidaoAgricola />
            <Partner page="agro" title="Cultivando Prosperidade Sustentável para o Futuro Agropecuário" content="Na B.ALFA, ao adotarmos práticas agrícolas e pecuárias sustentáveis, estamos não apenas criando oportunidades lucrativas para nossos clientes, mas também contribuindo para um futuro mais próspero e equilibrado para todos." />
            <Partners />
        </Layout>
    )
}