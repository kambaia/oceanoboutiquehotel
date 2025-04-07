import Layout from "../../layout";
import { Navbar } from "../../components/Header/Navbar";
import { TopBanner } from "../../components/share/topBanner";
import { Gallery } from "../../components/homePage/Gallery";

export default function Agro() {
    return (
        <Layout>
            <div className="w-full bg-white relative">
                <Navbar />
            </div>
            <TopBanner title="GALERIA DE FOTOS" tipo="agro-banner" />
            <Gallery/>
        </Layout>
    )
}